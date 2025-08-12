import { TypeUnit } from "./unit";

export type CheckStatus = "MISTAKE" | "CORRECTNESS" | "EXCLUDED" | "";
export type FeatureName = "bookmark" | "star" | "sound" | "tip";
export type TypeCompletedUnit = {
  termId: string;
  checkStatus: CheckStatus;
  lastAnswer: string;
};

export type PracticeStore = {
  unitSetId: string | null;
  currentUnitId: string | null;
  termNumber: number;
  newAnswer: string | null;
  oldAnswer: string;
  checkStatus: CheckStatus;
  localCheckStatus: CheckStatus;
  activeFeatures: FeatureName[];
  completedTerms: TypeCompletedUnit[];
  isUnitSetCompleted: boolean;
  isPending: boolean;
  hasNewAnswer: boolean;

  setUnitSetId: (id: string) => void;
  setCurrentUnitId: (id: string) => void;
  setNewAnswer: (value: string) => void;
  setOldAnswer: (value: string) => void;
  setPrevTerm: () => void;
  setNextTerm: (unitsLength: number) => void;
  resetTermNumber: () => void;
  setCompletedTerms: (
    units: TypeUnit[],
    termId: string,
    checkStatus: CheckStatus,
    lastAnswer: string
  ) => void;
  resetCompletedTerms: () => void;
  setCheckStatus: (status: CheckStatus) => void;
  resetCheckStatus: () => void;
  resetNewAnswer: () => void;
  toggleFeature: (featureName: FeatureName) => void;
  isFeatureActive: (featureName: FeatureName) => boolean;
  resetAllFeatures: () => void;
  skipTerm: (termId: string | null, units: TypeUnit[]) => void;
  setIsUnitSetCompleted: (value: boolean) => void;
  setIsPending: (value: boolean) => void;
  setLocalCheckStatus: (value: CheckStatus) => void;
  resetLocalCheckStatus: () => void;
  setHasNewAnswer: (value: boolean) => void;
};
