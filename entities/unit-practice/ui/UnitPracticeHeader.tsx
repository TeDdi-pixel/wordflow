import { FeatureConfig, features } from "../config/features";
import IconButton from "@/shared/components/buttons/IconButton";
import { FeatureName } from "@/store/useUnitPracticeStore";

export const UnitPracticeHeader = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2 cursor-pointer">
        <IconButton
          featureName={features[0].name as FeatureName}
          icon={features[0].icon}
        />
        <span>Показати підказку</span>
      </div>
      <div className="flex gap-4">
        {features
          .filter((feature) => feature.name !== "tip")
          .map((feature: FeatureConfig) => (
            <IconButton
              key={feature.id}
              icon={feature.icon}
              featureName={feature.name}
            />
          ))}
      </div>
    </div>
  );
};
