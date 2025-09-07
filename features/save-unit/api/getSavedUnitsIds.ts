import axios from "axios";

export const getSavedUnitsIds = async (unitSetId: string) => {
  try {
    const res = await axios.get(`/api/users/saved-units/${unitSetId}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
