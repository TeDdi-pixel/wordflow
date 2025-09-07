import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const saveUnit = async (unitSetId: string, unitId: string) => {
  try {
    const res = await toast.promise(
      axios.post("/api/users/saved-units", { unitSetId, unitId }),
      {
        loading: <LoadingText text="Зберігаємо..." />,
        success: "Термін був успішно збережений",
        error: "Сталася помилка при збереженні слова",
      }
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
