export const AUTH_ERROR_MESSAGES = {
  MISSING_EMAIL: "Не вказано електронну пошту",
  MISSING_FIELDS: "Поле електронної пошти та/або пароля порожнє",
  INVALID_EMAIL:
    "Невірний формат адреси електронної пошти (приклад: name@example.com)",
  PASSWORD_SHORT: "Пароль має містити щонайменше 6 символів",
  USER_NOT_FOUND: "Користувача з такою електронною поштою не знайдено.",
  SERVER_ERROR: "Виникла внутрішня помилка сервера",
  CREDENTIALS_DO_NOT_MATCH: "Електронна пошта або пароль не співпадають",
  INVALID_CREDENTIALS: "Електронна пошта або пароль невірні",
  EMAIL_IS_ALREADY_IN_USE: "Ця електронна пошта вже використовується",
  UNKNOWN: "Щось пішло не так",
  SESSION_NOT_FOUND: "Сесію не було створено",
};

export const UNIT_SET_ERROR_MESSAGES = {
  MISSING_TITLE: "Поле з назвою має пути заповнене",
  MISSING_FIELDS:
    "Хоча б одне одне поле термінів та визначень має бути заповнене",
  MISSING_CARDS: "Додайте хоча б одну картку",
  SERVER_ERROR: "Виникла внутрішня помилка сервера",
  USERNAME_MISSING:
    "Виникла помилка сесії, потрібно повторно пройти аутентифікацію",
};

export const PRACTICE_BOARD_ERROR_MESSAGES = {
  UNIT_SET_NOT_FOUND: "UnitSet не знайдено",
  SERVER_ERROR: "Виникла внутрішня помилка сервера",
  INVALID_DATA: "Передані дані мають неправильну структуру",
  DATABASE_UNAVAILABLE: "Сервіс тимчасово недоступний, спробуйте пізніше",
};
