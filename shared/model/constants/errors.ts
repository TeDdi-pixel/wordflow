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
  INVALID_CREDENTIALS_OR_PROVIDER:
    "Електронна пошта або пароль невірні. Також можливо ви вже зареєстровані через Google",
  EMAIL_REGISTERED_WITH_PROVIDER:
    "Цей email вже прив’язаний до {provider}. Увійдіть через нього",
  EMAIL_IS_ALREADY_IN_USE: "Ця електронна пошта вже використовується",
  UNKNOWN: "Щось пішло не так",
  SESSION_NOT_FOUND: "Сесію не було створено",
  AUTH_ERROR: "Помилка авторизації",
  SIGN_UP_ERROR: "Помилка реєстрації",
  SIGN_IN_ERROR: "Помилка реєстрації, переконайтесь, що дані коректні",
  RESERVED_USERNAME: `Ім'я користувача "admin" недоступне`,
  RESERVED_EMAIL: "Ця електронна адреса недоступна для реєстрації",
};

export const UNIT_SET_ERROR_MESSAGES = {
  ERROR_CARD_SET_EMPTY: "Набір карток має містити хоча б одну картку",
  MISSING_TITLE: "Поле з назвою має пути заповнене",
  MISSING_FIELDS:
    "Хоча б одне одне поле термінів та визначень має бути заповнене",
  MISSING_CARDS: "Заповніть хоча б одну картку",
  SERVER_ERROR: "Виникла внутрішня помилка сервера",
  USERNAME_MISSING:
    "Виникла помилка сесії, потрібно повторно пройти аутентифікацію",
  MISSING_LANGUAGES: "Відсутня мова терміна або визначення",
};

export const PRACTICE_BOARD_ERROR_MESSAGES = {
  UNIT_SET_NOT_FOUND: "UnitSet не знайдено",
  SERVER_ERROR: "Виникла внутрішня помилка сервера",
  INVALID_DATA: "Передані дані мають неправильну структуру",
  DATABASE_UNAVAILABLE: "Сервіс тимчасово недоступний, спробуйте пізніше",
};
