import { TypeTermStatus } from "./unit";

export type TypeUserTermItem = {
  _id: string;
  term: string;
  definition: string;
  status: TypeTermStatus;
  unitSetId: string;
  lastAnswer: string;
  phonetic: string;
  audio: string;
};

export type TypeUserTerms = {
  _id: string;
  relatedUserId: string;
  terms: TypeUserTermItem[];
};
