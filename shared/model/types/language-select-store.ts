export type TypeLanguageSelectStore = {
  isOpened: string[];

  openLanguageSelect: (id: string) => void;
  closeAllLanguageSelects: () => void;
};
