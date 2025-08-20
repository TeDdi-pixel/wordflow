export type TypeLike<T = string> = {
  _id: string;
  relatedUserId: string;
  unitSetId: T;
};
