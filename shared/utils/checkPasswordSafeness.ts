type PasswordCheckResult = {
  isPasswordSafe: boolean;
  passwordTip: string;
  isError: boolean;
};

const responses = {
  DEFAULT_UNSAFE_RESPONSE: {
    isPasswordSafe: false,
    isError: true,
    passwordTip:
      "Password must contain at least one capital letter, number and special character",
  },
  NOT_LONG_ENOUGH_RESPONSE: {
    isPasswordSafe: false,
    isError: true,
    passwordTip: "Password must be at least 8 characters",
  },
  SAFE_RESPONSE: {
    isPasswordSafe: true,
    passwordTip: "Your password is perfect! :)",
    isError: false,
  },
};

export const checkPasswordSafeness = (
  password: string | null
): PasswordCheckResult | undefined => {
  if (!password) return;
  if (password.length < 7) return responses.NOT_LONG_ENOUGH_RESPONSE;
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) return responses.DEFAULT_UNSAFE_RESPONSE;
  const hasNumber = /\d/.test(password);
  if (!hasNumber) return responses.DEFAULT_UNSAFE_RESPONSE;
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  if (!hasSpecialChar) return responses.DEFAULT_UNSAFE_RESPONSE;
  return responses.SAFE_RESPONSE;
};
