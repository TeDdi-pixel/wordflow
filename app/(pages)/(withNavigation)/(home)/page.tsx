import { getUserId } from "@/shared/lib/session";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { UnitCard } from "@/entities/unit-card";
import UnitSet from "@/shared/model/schemas/UnitSet";

export default async function Home() {
  const userId = await getUserId();
  const unitSets = await UnitSet.find({ relatedUserId: userId });

  return (
    <div className="grid grid-cols-3 gap-4 px-[16px] md:px-[32px] max-w-[1146px] mx-auto w-full h-full">
      {unitSets.map((unitSet: TypeUnitSet) => (
        <div key={unitSet._id.toString()}>
          <UnitCard
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            termsCount={unitSet.units.length}
            title={unitSet.title}
            unitId={unitSet._id.toString()}
          />
        </div>
      ))}
    </div>
  );
}
