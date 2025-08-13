import { TypeUnitSet } from "@/shared/model/types/unit";
import { UnitCard } from "@/entities/unit-card";
import UnitSet from "@/shared/model/schemas/UnitSet";
import MainTitle from "@/shared/components/MainTitle";

export default async function Home() {
  const unitSets = await UnitSet.find({});

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Усі юніти" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {unitSets.map((unitSet: TypeUnitSet) => (
          <div key={unitSet._id.toString()}>
            <UnitCard
              unitSetType={unitSet.unitSetType}
              description={unitSet.description}
              authorsName={unitSet.authorsName}
              termsCount={unitSet.units.length}
              title={unitSet.title}
              unitSetId={unitSet._id.toString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
