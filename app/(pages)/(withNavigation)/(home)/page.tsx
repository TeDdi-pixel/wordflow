import { UnitSetCover } from "@/entities/unit-set";
import { getAllUnitSets } from "@/entities/unit-set/api/getAllUnitSets";
import MainTitle from "@/shared/ui/MainTitle";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound } from "next/navigation";

const Home = async () => {
  const unitSets = await getAllUnitSets();

  if (unitSets.length === 0) return notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Усі набори" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {unitSets.map((unitSet: TypeUnitSet) => (
          <UnitSetCover
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
};

export default Home;
