import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const addLike = async (unitSetId: string) => {
  try {
    const response = await toast.promise(
      axios.post(`/api/unit-sets/${unitSetId}/like`),
      {
        loading: <LoadingText text="Завантаження..." />,
        success: "Набір додано до ваших вподобань",
        error: "Помилка при додаванні вподобання",
      }
    );

    return response.data.newLikesCount;
  } catch (err) {
    console.log(err);
  }
};
