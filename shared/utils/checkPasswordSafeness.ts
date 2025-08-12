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
      "Пароль повинен містити принаймні одну велику літеру, цифру та спеціальний символ($,%,#...)",
  },
  NOT_LONG_ENOUGH_RESPONSE: {
    isPasswordSafe: false,
    isError: true,
    passwordTip: "Пароль повинен складатися щонайменше з 8 символів",
  },
  SAFE_RESPONSE: {
    isPasswordSafe: true,
    passwordTip: "Ваш пароль ідеальний! :)",
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
