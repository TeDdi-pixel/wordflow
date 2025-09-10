export type TypeLikesStore = {
  likesCounts: { unitSetId: string; count: number }[];

  setLikesCounts: (unitSetId: string, newCount: number) => void;
};
