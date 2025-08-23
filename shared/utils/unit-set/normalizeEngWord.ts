export const normalizeEngWord = (term: string): string | null => {
  if (!term) return null;

  const trimmed = term.trim();

  if (!/^[a-zA-Z'-\s]+$/.test(trimmed)) {
    return null;
  }

  const words = trimmed.split(/\s+/);

  if (words.length === 0) return null;
  if (words.length === 1) return words[0].toLowerCase();
  if (words[0].toLowerCase() === "to") return words[1].toLowerCase();

  return words[0].toLowerCase();
};
