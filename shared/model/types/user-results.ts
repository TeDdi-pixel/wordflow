import { TypeTermStatus } from "./unit";

export type UserResultTerm = {
  _id: string;
  term: string;
  definition: string;
  status: TypeTermStatus;
  unitSetId: string;
  lastAnswer: string;
  phonetic: string;
  audio: string;
};

export type UserResults = {
  _id: string;
  relatedUserId: string;
  terms: UserResultTerm[];
  unitSetId: string;
};
