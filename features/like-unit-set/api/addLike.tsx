import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const addLike = (unitSetId: string) =>
  toast.promise(axios.post(`/api/unit-sets/${unitSetId}/like`), {
    loading: <LoadingText text="Завантаження..." />,
    success: "Юнітсет додано до ваших вподобань",
  });
