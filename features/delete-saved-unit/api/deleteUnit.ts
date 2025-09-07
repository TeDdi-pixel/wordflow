import axios from "axios";

export const deleteUnit = async (unitSetId: string, unitId: string) => {
  try {
    return await axios.delete("/api/users/saved-units", {
      data: {
        unitSetId,
        unitId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
