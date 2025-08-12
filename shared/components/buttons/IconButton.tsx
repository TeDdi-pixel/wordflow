"use client";

import { FeatureName } from "@/shared/model/types/practice-store";
import { usePracticeStore } from "@/store/usePracticeStore";
import { ReactNode, memo } from "react";

type Props = {
  icon: ReactNode;
  onClick?: () => void;
  featureName: FeatureName;
};

const IconButton = memo(({ icon, onClick, featureName }: Props) => {
  const toggleFeature = usePracticeStore((state) => state.toggleFeature);

  const handleClick = () => {
    toggleFeature(featureName);
    onClick?.();
  };

  return (
    <button
      className="cursor-pointer transition-all duration-200 hover:scale-110 text-accent"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
});

export default IconButton;
