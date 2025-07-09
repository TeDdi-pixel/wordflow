import { UnitInput } from "./UnitInput";
import { UnitHeader } from "./UnitHeader";
import { memo } from "react";

type Props = {
  id: number;
};

export const Unit = memo(({ id }: Props) => {
  return (
    <div className="w-full bg-foreground rounded-lg py-3 px-6 relative">
      <UnitHeader id={id} />
      <span className="flex w-full h-[2px] bg-accent-text absolute left-0"></span>
      <div className="flex w-full gap-8 mt-[46px] mb-40px font-normal">
        <UnitInput
          id={id}
          fieldType="term"
          name={`card[${id - 1}].term`}
          label="Термін"
        />
        <UnitInput
          id={id}
          fieldType="definition"
          name={`card[${id - 1}].definition`}
          label="Визначення"
        />
      </div>
    </div>
  );
});
