export const normalizeText = (str: string) => {
  if (!str) return [];
  return Array.from(
    new Set(
      str
        .toLowerCase()
        .trim()
        // split by comma, semicolon, slash, or newline
        .split(/[\n,;/]+/)
        .map((word) =>
          // keep letters, numbers, hyphens, and apostrophes inside words/phrases
          word.trim().replace(/[^\p{L}\p{N}'-]+/gu, "")
        )
        .filter(Boolean) // remove empty strings
    )
  );
};
