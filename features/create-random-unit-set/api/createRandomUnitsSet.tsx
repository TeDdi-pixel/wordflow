import LoadingText from "@/shared/ui/LoadingText";
import axios from "axios";
import toast from "react-hot-toast";

export const createRandomUnitsSet = async (limit: number) => {
  try {
    const res = await toast.promise(axios.post("/api/unit-sets", { limit }), {
      loading: <LoadingText text="Завантаження..." />,
      success: "Набір успішно додано до ваших особистих карток",
      error: "Виникла помилка при створенні набору",
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};
