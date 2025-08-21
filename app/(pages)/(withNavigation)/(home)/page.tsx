import { UnitSetCard } from "@/entities/unit-set-card";
import MainTitle from "@/shared/components/MainTitle";
import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";

export default async function Home() {
  await createDbConnection();

  const unitSets = await UnitSet.find({});

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Усі юнітсети" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {unitSets.map((unitSet: TypeUnitSet) => (
          <UnitSetCard
            key={unitSet._id.toString()}
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            termsCount={unitSet.units.length}
            title={unitSet.title}
            unitSetId={unitSet._id.toString()}
            likesCount={unitSet.likesCount}
          />
        ))}
      </div>
    </div>
  );
}
