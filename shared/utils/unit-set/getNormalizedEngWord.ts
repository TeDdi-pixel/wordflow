export const getNormalizedEngWord = (term: string): string | null => {
  if (!term) return null;

  const trimmed = term.trim();

  if (!/^[a-zA-Z'-\s]+$/.test(trimmed)) return null;

  const words = trimmed.split(/\s+/).map((w) => w.toLowerCase());

  if (words.length === 0) return null;

  if (words[0] === "to") {
    return words.length === 2 ? words[1] : null;
  }

  return words.length === 1 ? words[0] : null;
};
