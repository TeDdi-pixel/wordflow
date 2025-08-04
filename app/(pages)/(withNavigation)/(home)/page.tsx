import { getUserId } from "@/shared/lib/session";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { UnitCard } from "@/entities/unit-card";
import UnitSet from "@/shared/model/schemas/UnitSet";

export default async function Home() {
  const userId = await getUserId();
  const unitSets = await UnitSet.find({ relatedUserId: userId });

  return (
    <div className="flex flex-1 max-w-[1440px] w-full h-full flex-col items-center">
      {unitSets.map((unitSet: TypeUnitSet) => (
        <div key={unitSet._id.toString()} className="mb-4 w-full">
          <UnitCard
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
