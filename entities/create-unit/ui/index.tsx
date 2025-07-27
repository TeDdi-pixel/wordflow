import { UnitInput } from "./UnitInput";
import { UnitHeader } from "./UnitHeader";
import { memo } from "react";

type Props = {
  unitId: number;
};

export const Unit = memo(({ unitId }: Props) => {
  return (
    <div className="w-full bg-foreground rounded-lg py-3 px-6 relative">
      <UnitHeader unitId={unitId} />
      <span className="flex w-full h-[2px] bg-accent-text absolute left-0"></span>
      <div className="flex w-full gap-8 mt-[46px] mb-40px font-normal">
        <UnitInput
          unitId={unitId}
          fieldType="term"
          name={`card[${unitId - 1}].term`}
          label="Термін"
        />
        <UnitInput
          unitId={unitId}
          fieldType="definition"
          name={`card[${unitId - 1}].definition`}
          label="Визначення"
        />
      </div>
    </div>
  );
});
