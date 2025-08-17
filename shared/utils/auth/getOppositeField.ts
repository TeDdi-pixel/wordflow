export const getOppositeField = (
  field: "password" | "verifyPassword" | "loginPassword"
) => {
  if (field === "password") return "verifyPassword";
  if (field === "verifyPassword") return "password";
  return "loginPassword";
};
