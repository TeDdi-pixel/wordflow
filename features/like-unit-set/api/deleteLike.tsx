import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const deleteLike = (unitSetId: string) =>
  toast.promise(axios.delete(`/api/unit-sets/${unitSetId}/like`), {
    loading: <LoadingText text="Завантаження..." />,
    success: "Набір видалено з ваших вподобань",
  });
