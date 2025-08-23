import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { usePracticeStore } from "@/store/usePracticeStore";
import { showError } from "@/shared/lib/toasts";
import toast from "react-hot-toast";
import LoadingText from "@/shared/ui/LoadingText";
import { updateUserResult } from "../api/updateUserResult";

export const useSaveUnitSetResult = () => {
  const router = useRouter();

  const unitSetId = usePracticeStore((state) => state.unitSetId);
  const completedTerms = usePracticeStore((state) => state.completedTerms);
  const isPending = usePracticeStore((state) => state.isPending);
  const setIsPending = usePracticeStore((state) => state.setIsPending);
  const resetCompletedTerms = usePracticeStore(
    (state) => state.resetCompletedTerms
  );

  useEffect(() => {
    resetCompletedTerms();
  }, []);

  const handleSave = useCallback(async () => {
    if (!unitSetId || isPending) return false;
    if (completedTerms.length === 0) {
      showError("Ви ще не надали жодної відповіді", crypto.randomUUID());
      return;
    }

    setIsPending(true);

    const promise = updateUserResult(unitSetId, completedTerms);

    toast.promise(promise, {
      success: "Результати успішно перевірені",
      loading: <LoadingText text="Завантаження..." />,
      error: (error) => error.message,
    });

    try {
      const success = await promise;

      if (success) {
        router.push(`/card-set/${unitSetId}/results?refresh=${Date.now()}`);
      }
      return success;
    } catch {
      return false;
    } finally {
      setIsPending(false);
    }
  }, [unitSetId, completedTerms, isPending, setIsPending, router]);

  return {
    saveResults: handleSave,
  };
};
