import { TypeUnit } from "./unit";

export type CheckStatus = "MISTAKE" | "CORRECTNESS" | "EXCLUDED" | "";
export type FeatureName = "bookmark" | "like" | "sound" | "tip";
export type TypeCompletedUnit = {
  termId: string;
  checkStatus: CheckStatus;
  lastAnswer: string;
  audio?: string;
  phonetic?: string;
};

export type PracticeStore = {
  unitSetId: string | null;
  currentUnitId: string | null;
  termNumber: number;
  newAnswer: string | null;
  oldAnswer: string;
  checkStatus: CheckStatus;
  localCheckStatus: CheckStatus;
  completedTerms: TypeCompletedUnit[];
  isPending: boolean;
  hasNewAnswer: boolean;
  currentTermLang: "source" | "target";

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
    lastAnswer: string,
    audio: string,
    phonetic: string
  ) => void;
  resetCompletedTerms: () => void;
  setCheckStatus: (status: CheckStatus) => void;
  resetCheckStatus: () => void;
  resetNewAnswer: () => void;
  skipTerm: (termId: string | null, units: TypeUnit[]) => void;
  setIsPending: (value: boolean) => void;
  setLocalCheckStatus: (value: CheckStatus) => void;
  resetLocalCheckStatus: () => void;
  setHasNewAnswer: (value: boolean) => void;
  setCurrentTermLang: (value: "source" | "target") => void;
};
