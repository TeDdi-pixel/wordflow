import { UnitSetCover } from "@/entities/unit-set";
import { getCommunitySets } from "@/entities/unit-set/api/getCommunitySets";
import MainTitle from "@/shared/ui/MainTitle";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound } from "next/navigation";

const page = async () => {
  const unitSets = await getCommunitySets("cards");

  if (unitSets.length === 0) notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Картки від ком'юніті" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {unitSets.map((unitSet: TypeUnitSet) => (
          <div key={unitSet._id.toString()}>
            <UnitSetCover
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
