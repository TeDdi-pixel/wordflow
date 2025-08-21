import { UnitSetCard } from "@/entities/unit-set-card";
import MainTitle from "@/shared/components/MainTitle";
import createDbConnection from "@/shared/lib/mongoose";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound } from "next/navigation";

const page = async () => {
  await createDbConnection();

  const communityUnitSets = await UnitSet.find({
    unitSetType: "cards",
  });

  if (!communityUnitSets || communityUnitSets.length === 0) notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Картки від ком'юніті" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {communityUnitSets.map((unitSet: TypeUnitSet) => (
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
    </div>
  );
};

export default page;
