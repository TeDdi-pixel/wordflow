import { showError } from "@/shared/lib/toasts";
import { useActionState } from "react";
import { useEffect } from "react";
import { BaseFields } from "../model/types/forms";

const useActionForm = <T extends BaseFields>(
  formAction: (prevState: Awaited<T>, form: FormData) => Promise<T>,
  initialForm: Awaited<T>
) => {
  const [state, action, pending] = useActionState<T, FormData>(
    formAction,
    initialForm
  );

  useEffect(() => {
    if (state.operationType === "ERROR") {
      showError(state.error, crypto.randomUUID());
    }
  }, [state]);

  return { state, action, pending };
};

export default useActionForm;
