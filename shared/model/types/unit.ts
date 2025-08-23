export type TypeTermStatus = "unlearned" | "learned" | "excluded";

export type TypeUnit = {
  _id: string;
  termNumber: number;
  term: string;
  definition: string;
  meanings?: TypeMeaning[];
  phonetic?: string;
  audio?: string;
  proposedOption?: string;
};

export type UnitSetType = "cards";

export type TypeUnitSetForm = {
  type: "SUCCESS" | "ERROR" | string;
  title: string;
  description: string;
  units: TypeUnit[];
  error: string;
  unitSetType: UnitSetType;
  errorId: string;
};

export type TypeUnitSet = {
  relatedUserId: string;
  authorsName: string;
  _id: string;
  title: string;
  description: string;
  unitSetType: "cards";
  units: TypeUnit[];
  likesCount: number;
  proposedDefinitions: string[];
};

export type TypePhonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: {
    name: string;
    url: string;
  };
};

export type TypeMeaning = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
  }[];
  synonyms?: string[];
  antonyms?: string[];
};
