import { usePracticeStore } from "@/store/usePracticeStore";

const useAnswerTerm = (checkAnswer: () => void) => {
  const isPending = usePracticeStore((state) => state.isPending);

  const onEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isPending) checkAnswer();
  };

  return onEnterPress;
};

export default useAnswerTerm;
