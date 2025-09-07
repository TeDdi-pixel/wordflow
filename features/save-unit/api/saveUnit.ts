import axios from "axios";

export const saveUnit = async (unitSetId: string, unitId: string) => {
  try {
    return await axios.post("/api/users/saved-units", {
      unitSetId,
      unitId,
    });
  } catch (error) {
    console.log(error);
  }
};
