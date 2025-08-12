import {
  FeatureConfig,
  features,
} from "@/features/practice-session/config/features";
import IconButton from "@/shared/components/buttons/IconButton";
import { FeatureName } from "@/shared/model/types/practice-store";

export const ActionBar = () => {
  return (
    <div className="flex justify-between w-full">
      <IconButton
        featureName={features[0].name as FeatureName}
        icon={features[0].icon}
      />
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
