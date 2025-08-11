import { TypeCompletedUnit } from "@/store/useUnitPracticeStore";
import axios from "axios";

export const updateUserResults = async (
  unitSetId: string,
  terms: TypeCompletedUnit[]
): Promise<boolean> => {
  if (!unitSetId || terms.length === 0) return false;

  try {
    await axios.post(`/api/user-terms/practice-results/${unitSetId}`, {
      completedTerms: terms,
    });
    return true;
  } catch (error) {
    console.error("Ошибка при сохранении результатов:", error);
    return false;
  }
};
