import { TypeUnitSet } from "@/shared/model/types/unit";
import { getHistoryUnitSets } from "../model/getHistoryUnitSets";
import { UnitSetCard } from "@/entities/unit-set-card";

export const HistoryUnitSets = async () => {
  const unitSets = await getHistoryUnitSets();

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {unitSets.map((unitSet: TypeUnitSet) => (
        <div key={unitSet._id.toString()}>
          <UnitSetCard
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            termsCount={unitSet.units.length}
            title={unitSet.title}
            unitSetId={unitSet._id.toString()}
            likesCount={unitSet.likesCount}
          />
        </div>
      ))}
    </div>
  );
};
