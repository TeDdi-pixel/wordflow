import { UnitCard } from "@/entities/unit-card";
import MainTitle from "@/shared/components/MainTitle";
import { checkForSession, getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UserTerms from "@/shared/model/schemas/UserTerms";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { TypeUserTerms } from "@/shared/model/types/user-terms";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

const History = async () => {
  const isSession = await checkForSession();
  if (!isSession) redirect("/login");

  const relatedUserId = await getUserId();

  if (!relatedUserId) redirect("/login");
  const userPreviousUnitSets = await UserTerms.find({ relatedUserId });

  const unitSetIdsSet = new Set<string>();
  userPreviousUnitSets.forEach((unitSet: TypeUserTerms) => {
    unitSet.terms.forEach((term) => {
      unitSetIdsSet.add(term.unitSetId);
    });
  });

  const unitSetIdsArray = Array.from(unitSetIdsSet).map(
    (id) => new mongoose.Types.ObjectId(id)
  );

  const unitSets = await UnitSet.find({
    _id: { $in: unitSetIdsArray },
  });

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Історія взаємодій" />

      <div className="grid grid-cols-3 gap-4 w-full">
        {unitSets.map((unitSet: TypeUnitSet) => (
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
    </div>
  );
};

export default History;
