import { UnitSetCover } from "@/entities/unit-set";
import { getLikedUnitSets } from "@/entities/unit-set/api/getLikedUnitSets";
import MainTitle from "@/shared/ui/MainTitle";
import { getUserId } from "@/shared/lib/session";
import { notFound, redirect } from "next/navigation";

const Library = async () => {
  const userId = await getUserId();

  if (!userId) return redirect("/login");

  const unitSets = await getLikedUnitSets(userId);

  if (unitSets.length === 0) notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Мої вподобання" />

      <div className="grid w-full grid-cols-3 gap-4">
        {unitSets.map((unitSet) => (
          <UnitSetCover
            key={unitSet._id.toString()}
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            unitsCount={unitSet.units.length}
            title={unitSet.title}
            target={unitSet.target}
            source={unitSet.source}
            unitSetId={unitSet._id.toString()}
            likesCount={unitSet.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
