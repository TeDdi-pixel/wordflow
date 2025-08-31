export const toPlain = (doc: any) => {
  return JSON.parse(JSON.stringify(doc));
};
