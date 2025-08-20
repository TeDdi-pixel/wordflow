import { auth } from "@/auth";
import { UnitSetCard } from "@/entities/unit-set-card";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound, redirect } from "next/navigation";
import { getSavedUnitSets } from "../model/getSavedUnitSets";

const LibraryUnitSets = async () => {
  const session = await auth();

  if (!session || !session.user?.id) redirect("/login");

  const unitSets = await getSavedUnitSets(session.user.id);

  if (!unitSets || unitSets.length === 0) notFound();
  return (
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
  );
};

export default LibraryUnitSets;
