export const isPasswordField = (
  value: string
): value is "password" | "verifyPassword" => {
  return (
    value === "password" ||
    value === "verifyPassword" ||
    value === "loginPassword"
  );
};
