import { UnitSetCover } from "@/entities/unit-set";
import { getUserHistoryUnitSets } from "@/entities/unit-set/api/getHistoryUnitSets";
import MainTitle from "@/shared/ui/MainTitle";
import { getUserId } from "@/shared/lib/session";
import { notFound, redirect } from "next/navigation";

const History = async () => {
  const userId = await getUserId();

  if (!userId) return redirect("/login");

  const unitSets = await getUserHistoryUnitSets(userId);

  if (unitSets.length === 0) return notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Історія взаємодій" />

      <div className="grid w-full grid-cols-3 gap-4">
        {unitSets.map((unitSet) => (
          <UnitSetCover
            key={unitSet._id.toString()}
            unitSetType={unitSet.unitSetType}
            description={unitSet.description}
            authorsName={unitSet.authorsName}
            unitsCount={unitSet.unitsCount}
            title={unitSet.title}
            target={unitSet.target}
            source={unitSet.source}
            savedUnitsCount={unitSet.savedUnitsCount}
            unitSetId={unitSet._id.toString()}
            likesCount={unitSet.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
