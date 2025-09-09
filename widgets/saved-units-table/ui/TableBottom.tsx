import { CreateRandomUnitsSetButton } from "@/features/create-random-unit-set";
import RandomUnitsCounterInput from "@/shared/ui/inputs/RandomUnitsCounter";

export const TableBottom = () => {
  return (
    <div className="relative flex items-center justify-between w-full gap-4 px-5 py-3 rounded-default bg-fg">
      <RandomUnitsCounterInput label="Кількість випадкових термінів:" />

      <CreateRandomUnitsSetButton />
    </div>
  );
};
