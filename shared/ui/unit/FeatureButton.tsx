"use client";

import { useUnitStore, FeatureName } from "@/store/useUnitStore";
import { ReactNode, memo } from "react";

type Props = {
  icon: ReactNode;
  onClick?: () => void;
  featureName: FeatureName;
};

const FeatureButton = memo(({ icon, onClick, featureName }: Props) => {
  const toggleFeature = useUnitStore((state) => state.toggleFeature);

  const handleClick = () => {
    toggleFeature(featureName);
    onClick?.();
  };

  return (
    <button
      className="text-unit-icon cursor-pointer transition-all duration-200 hover:scale-110"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
});

export default FeatureButton;
