import { UnitSetCover } from "@/entities/unit-set";
import { getCommunitySets } from "@/entities/unit-set/api/getCommunitySets";
import MainTitle from "@/shared/ui/MainTitle";
import { notFound } from "next/navigation";

const page = async () => {
  const unitSets = await getCommunitySets("cards");

  if (unitSets.length === 0) notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Картки від ком'юніті" />

      <div className="grid w-full grid-cols-3 gap-4">
        {unitSets.map((unitSet) => (
          <UnitSetCover
            key={unitSet._id}
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            unitsCount={unitSet.units.length}
            title={unitSet.title}
            target={unitSet.target}
            source={unitSet.source}
            savedUnitsCount={unitSet.savedUnitsCount}
            unitSetId={unitSet._id}
            likesCount={unitSet.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
