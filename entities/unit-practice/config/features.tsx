import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import StarIcon from "@/shared/icons/unit/StarIcon";
import TipIcon from "@/shared/icons/unit/TipIcon";
import { FeatureName } from "@/store/useUnitPracticeStore";
import { ReactNode } from "react";

export type FeatureConfig = {
  id: number;
  icon: ReactNode;
  name: FeatureName;
};

export const features: FeatureConfig[] = [
  { id: 0, name: "tip", icon: <TipIcon /> },
  { id: 1, name: "sound", icon: <SoundIcon /> },
  { id: 2, name: "star", icon: <StarIcon /> },
  { id: 3, name: "bookmark", icon: <BookmarkIcon /> },
];
