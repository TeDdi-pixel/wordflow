export type TypeLikesStore = {
  likesCounts: { unitSetId: string; count: number }[];

  setLikesCounts: (unitSetId: string, count: number) => void;
};
