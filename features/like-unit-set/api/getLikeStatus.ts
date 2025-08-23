import axios from "axios";

export const getLikeStatus = async (unitSetId: string) => {
  const res = await axios.get(`/api/unit-sets/${unitSetId}/like`);
  return res.data;
};
