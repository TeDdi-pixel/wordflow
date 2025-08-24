export const cleanEngWord = (word: string): string =>
  word
    .trim()
    .replace(/[^a-zа-яёіїєґ'-]/gi, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
