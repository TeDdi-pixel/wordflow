"use client";
import { memo, useEffect, useRef, useCallback } from "react";

const CursorFollower = memo(({ unitSetId }: { unitSetId: string }) => {
  const shadowRef = useRef<HTMLDivElement>(null);
  const lastMouseEvent = useRef<MouseEvent | null>(null);
  const animationFrame = useRef<number | null>(null);
  const isVisible = useRef<boolean>(false);
  const hoverElementId = `unit-set-cover-${unitSetId}`;

  const updatePosition = useCallback(
    (mouseEvent: MouseEvent) => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        const element = document.getElementById(hoverElementId);
        const shadow = shadowRef.current;
        if (!element || !shadow) return;

        const rect = element.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;

        const isInBounds =
          x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

        if (!isInBounds) {
          if (isVisible.current) {
            isVisible.current = false;
            shadow.style.transform = "translate(-50%, -50%) scale(0)";
          }
          return;
        }

        if (!isVisible.current) {
          isVisible.current = true;
        }

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

        const blur = 60 + (distance / maxDistance) * 30;
        const spread = 10 + (distance / maxDistance) * 95;

        shadow.style.left = `${x}px`;
        shadow.style.top = `${y}px`;
        shadow.style.boxShadow = `0 0 ${blur}px ${spread}px #562756`;
        shadow.style.transform = "translate(-50%, -50%) scale(1)";
      });
    },
    [hoverElementId]
  );

  const throttledUpdate = useCallback(
    (() => {
      let lastTime = 0;
      const delay = 16;

      return (mouseEvent: MouseEvent) => {
        const now = Date.now();
        if (now - lastTime >= delay) {
          lastTime = now;
          updatePosition(mouseEvent);
        }
      };
    })(),
    [updatePosition]
  );

  useEffect(() => {
    const element = document.getElementById(hoverElementId);
    if (!element) return;

    const handleMove = (e: MouseEvent) => {
      lastMouseEvent.current = e;
      throttledUpdate(e);
    };

    const handleEnter = (e: MouseEvent) => {
      lastMouseEvent.current = e;
      updatePosition(e);
    };

    const handleLeave = () => {
      if (shadowRef.current && isVisible.current) {
        isVisible.current = false;
        shadowRef.current.style.transform = "translate(-50%, -50%) scale(0)";
      }
      lastMouseEvent.current = null;
    };

    const handleScroll = () => {
      if (lastMouseEvent.current) {
        throttledUpdate(lastMouseEvent.current);
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      lastMouseEvent.current = e;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const isInBounds =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (isInBounds && !isVisible.current) {
        updatePosition(e);
      } else if (!isInBounds && isVisible.current) {
        if (shadowRef.current) {
          isVisible.current = false;
          shadowRef.current.style.transform = "translate(-50%, -50%) scale(0)";
        }
      } else if (isInBounds && isVisible.current) {
        throttledUpdate(e);
      }
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    document.addEventListener("mousemove", handleGlobalMouseMove, {
      passive: true,
    });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hoverElementId, updatePosition, throttledUpdate]);

  return (
    <div
      ref={shadowRef}
      className="absolute pointer-events-none will-change-transform transition-transform top-0 left-0"
      style={{
        transform: "translate(-50%, -50%) scale(0)",
      }}
    />
  );
});

export default CursorFollower;
