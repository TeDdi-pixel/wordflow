import { Language } from "@/shared/model/types/temp-store";
import { UnitSetType } from "@/shared/model/types/unit";

export type TypeCardSetProps = {
  unitSetId: string;
  title: string;
  termsCount: number;
  authorsName: string;
  description: string;
  unitSetType: UnitSetType;
  likesCount: number;
  source: Language;
  target: Language;
};
