import {
  CheckStatus,
  PracticeStore,
  TypeCompletedUnit,
} from "@/shared/model/types/practice-store";
import { TypeMeaning, TypeUnit } from "@/shared/model/types/unit";
import { create } from "zustand";

export const usePracticeStore = create<PracticeStore>((set) => ({
  unitSetId: null,
  currentUnitId: null,
  completedTerms: [],
  termNumber: 0,
  newAnswer: null,
  oldAnswer: "",
  checkStatus: "",
  localCheckStatus: "",
  isUnitSetCompleted: false,
  isPending: false,
  hasNewAnswer: false,
  currentTermLang: "source",
  isHintOpen: false,
  meaningNumber: 0,
  activePartOfSpeech: "",
  isShuffled: false,
  likesCount: 0,
  savedUnitsCount: 0,

  setSavedUnitsCount: (value: number) =>
    set({
      savedUnitsCount: value,
    }),
  setLikesCount: (value: number) =>
    set({
      likesCount: value,
    }),
  switchIsShuffled: () =>
    set((state) => ({
      isShuffled: !state.isShuffled,
    })),
  resetIsShuffled: () =>
    set({
      isShuffled: false,
    }),
  setActivePartOfSpeech: (value: string) =>
    set({
      activePartOfSpeech: value,
    }),

  showNextMeaning: (meanings: TypeMeaning[]) => {
    return set((state) => {
      const meaningsLength = meanings.length;

      const newMeaningNumber =
        state.meaningNumber < meaningsLength - 1
          ? state.meaningNumber + 1
          : state.meaningNumber;

      return { meaningNumber: newMeaningNumber };
    });
  },

  showPrevMeaning: () =>
    set((state) => ({
      meaningNumber:
        state.meaningNumber !== 0
          ? state.meaningNumber - 1
          : state.meaningNumber,
    })),

  resetMeaningNumber: () => set({ meaningNumber: 0 }),

  setCurrentTermLang: (value: "source" | "target") =>
    set({ currentTermLang: value }),

  setUnitSetId: (id: string) => set({ unitSetId: id }),

  setCurrentUnitId: (id: string) => set({ currentUnitId: id }),

  setCheckStatus: (status) => set({ checkStatus: status }),

  resetCheckStatus: () => set({ checkStatus: "" }),

  setLocalCheckStatus: (status) => set({ localCheckStatus: status }),

  resetLocalCheckStatus: () => set({ localCheckStatus: "" }),

  setNewAnswer: (value: string) =>
    set({
      newAnswer: value,
      hasNewAnswer: true,
    }),

  setOldAnswer: (value: string) =>
    set({ oldAnswer: value.toLowerCase().trim() }),

  resetNewAnswer: () => set({ newAnswer: null, hasNewAnswer: false }),

  setPrevTerm: () =>
    set((state) => ({
      termNumber: Math.max(0, state.termNumber - 1),
    })),

  setNextTerm: (unitsLength: number) =>
    set((state) => ({
      termNumber: Math.min(unitsLength - 1, state.termNumber + 1),
    })),

  setCompletedTerms: (
    units: TypeUnit[],
    termId: string,
    checkStatus: CheckStatus,
    lastAnswer: string,
    audio: string,
    phonetic: string
  ) => {
    return set((state) => {
      let completedTerms = state.completedTerms.length
        ? [...state.completedTerms]
        : units.map(
            ({ _id, audio, phonetic }): TypeCompletedUnit => ({
              termId: _id,
              checkStatus: "",
              lastAnswer: "",
              audio: audio,
              phonetic: phonetic,
            })
          );

      const termIndex = completedTerms.findIndex((t) => t.termId === termId);

      if (termIndex !== -1) {
        completedTerms[termIndex] = {
          ...completedTerms[termIndex],
          checkStatus,
          lastAnswer,
          audio,
          phonetic,
        };
      }

      return { completedTerms };
    });
  },

  resetCompletedTerms: () => set({ completedTerms: [] }),

  resetTermNumber: () => set({ termNumber: 0 }),

  skipTerm: (termId: string | null, units: TypeUnit[]) =>
    set((state) => {
      if (!termId) return {};

      const currentAnswer = state.newAnswer;

      let completedTerms = state.completedTerms.length
        ? [...state.completedTerms]
        : units.map(
            ({ _id, audio, phonetic }): TypeCompletedUnit => ({
              termId: _id,
              checkStatus: "",
              lastAnswer: "",
              audio: audio,
              phonetic: phonetic,
            })
          );
      const unit = units.find((u) => u._id === termId);

      return {
        completedTerms: [
          ...completedTerms.filter(
            (t: TypeCompletedUnit) => t.termId !== termId
          ),
          {
            termId,
            checkStatus: "EXCLUDED",
            lastAnswer: currentAnswer ?? "",
            audio: unit?.audio,
            phonetic: unit?.audio,
          },
        ],
      };
    }),

  setIsPending: (value: boolean) => set({ isPending: value }),

  setHasNewAnswer: (value: boolean) => set({ hasNewAnswer: value }),

  setIsHintOpen: (status: boolean) => set({ isHintOpen: status }),
}));
