import { UnitCard } from "@/entities/unit-card";
import { getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { notFound } from "next/navigation";

const page = async () => {
  const userId = await getUserId();

  const userUnitSets = await UnitSet.find({ relatedUserId: userId });

  if (!userUnitSets || userUnitSets.length === 0) notFound();

  return (
    <div className="grid grid-cols-3 gap-4 px-[16px] md:px-[32px] max-w-[1146px] mx-auto w-full h-full">
      {userUnitSets.map((unitSet: TypeUnitSet) => (
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
  );
};

export default page;
