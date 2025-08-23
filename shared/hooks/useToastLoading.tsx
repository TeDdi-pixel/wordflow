import LoadingText from "@/shared/ui/LoadingText";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const useToastLoading = (pending: boolean) => {
  const toastIdRef = useRef<string>(undefined);

  useEffect(() => {
    if (pending) {
      toastIdRef.current = toast.loading(
        <LoadingText text="Завантаження..." />,
        { duration: Infinity }
      );
    } else if (toastIdRef.current) {
      toast.dismiss(toastIdRef.current);
      toastIdRef.current = undefined;
    }
  }, [pending]);
};

export default useToastLoading;
