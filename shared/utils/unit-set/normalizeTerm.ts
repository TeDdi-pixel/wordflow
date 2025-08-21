export const normalizeTerm = (term: string): string => {
  const words = term.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0];
  }

  if (words[0].toLowerCase() === "to") {
    return words[1];
  }

  return words[0];
};
