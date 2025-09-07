import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const deleteUnit = async (unitSetId: string, unitId: string) => {
  try {
    const res = await toast.promise(
      axios.delete("/api/users/saved-units", { data: { unitSetId, unitId } }),
      {
        loading: <LoadingText text="Видаляємо..." />,
        success: "Термін був успішно видалений",
        error: "Сталася помилка при видаленні слова",
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
