import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const deleteUnitSet = async (unitSetId: string) => {
  const res = await toast.promise(axios.delete(`/api/unit-sets/${unitSetId}`), {
    loading: <LoadingText text="Видаляємо..." />,
    success: "Набір успішно видалено",
    error: (error) => error.response.data.message,
  });

  return res.data;
};
