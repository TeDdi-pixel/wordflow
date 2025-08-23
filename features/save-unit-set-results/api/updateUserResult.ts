import { TypeCompletedUnit } from "@/shared/model/types/practice-store";
import axios from "axios";

export const updateUserResult = async (
  unitSetId: string,
  completedTerms: TypeCompletedUnit[]
): Promise<boolean> => {
  if (!unitSetId || completedTerms.length === 0) return false;

  try {
    await axios.post(`/api/users/results/${unitSetId}`, {
      completedTerms,
    });
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }
    throw new Error("Невідома помилка при збереженні результатів");
  }
};
