import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const deleteLike = async (unitSetId: string) => {
  try {
    const response = await toast.promise(
      axios.delete(`/api/unit-sets/${unitSetId}/like`),
      {
        loading: <LoadingText text="Завантаження..." />,
        success: "Набір видалено з ваших вподобань",
      }
    );
    return response.data.newLikesCount;
  } catch (error) {
    console.log(error);
  }
};
