import { TypeUnit, UnitSetType } from "@/shared/model/types/unit";

export type DescriptionInputProps = {
  placeholder: string;
  defaultValue: string;
};

export type TitleInputProps = {
  placeholder: string;
  defaultValue: string;
};

export type TypeInitialForm = {
  title: string;
  status: "SUCCESS" | "ERROR" | string;
  description: string;
  units: TypeUnit[];
  unitSetType: UnitSetType;
  error: string;
};
