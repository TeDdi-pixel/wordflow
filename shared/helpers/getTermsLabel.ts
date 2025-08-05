export const getTermsLabel = (count: number) => {
  const n = count % 100;
  if (n >= 11 && n <= 14) {
    return "термінів";
  }
  const last = count % 10;
  if (last === 1) {
    return "термін";
  }
  if (last >= 2 && last <= 4) {
    return "терміни";
  }
  return "термінів";
};
