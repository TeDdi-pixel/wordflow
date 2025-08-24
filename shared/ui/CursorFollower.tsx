"use client";

import { memo, useEffect, useState } from "react";

const CursorFollower = memo(
  ({ unitSetId, color }: { unitSetId: string; color: string }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [shadowSize, setShadowSize] = useState({ blur: 100, spread: 20 });
    const [isVisible, setIsVisible] = useState(false);
    const hoverElementId = `unit-set-cover-${unitSetId}`;

    useEffect(() => {
      const element = document.getElementById(hoverElementId);
      if (!element) return;

      const handleMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPos({ x, y });

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

        const blur = 100 + (distance / maxDistance) * 40;
        const spread = 30 + (distance / maxDistance) * 40;

        setShadowSize({ blur, spread });
      };

      const handleEnter = () => setIsVisible(true);
      const handleLeave = () => setIsVisible(false);

      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);

      return () => {
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      };
    }, [hoverElementId]);

    return (
      <div
        className="absolute pointer-events-none z-0 transition-transform duration-300"
        style={{
          boxShadow: `0 0 ${shadowSize.blur}px ${shadowSize.spread}px ${color}`,
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "translate(-50%, -50%)",
          scale: `${isVisible ? "1" : "0"}`,
        }}
      />
    );
  }
);

export default CursorFollower;
