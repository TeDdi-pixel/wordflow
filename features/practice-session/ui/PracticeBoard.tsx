import { TypeUnit } from "@/shared/model/types/unit";
import { ActionBar } from "./ActionBar";
import { UnitInput, UnitTerm } from "@/entities/unit-set-practice";

export const PracticeBoard = ({ units }: { units: TypeUnit[] }) => {
  return (
    <div className="mx-auto h-[506px] w-full bg-foreground rounded-lg p-8 flex flex-col items-center justify-between mb-4">
      <ActionBar />
      <UnitTerm units={units} />
      <UnitInput units={units} />
    </div>
  );
};
