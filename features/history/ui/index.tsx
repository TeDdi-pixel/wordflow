import { TypeUnitSet } from "@/shared/model/types/unit";
import { getHistoryUnitSets } from "../model/getHistoryUnitSets";
import { UnitSetCard } from "@/entities/unit-set-card";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const HistoryUnitSets = async () => {
  const session = await auth();

  if (!session || !session.user?.id) redirect("/login");

  const unitSets = await getHistoryUnitSets(session.user.id);
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {unitSets.map((unitSet: TypeUnitSet) => (
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
  );
};
