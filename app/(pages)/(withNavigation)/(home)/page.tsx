import { getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";
import TestButton from "./ui/TestButton";

export default async function Home() {
  const userId = await getUserId();
  const unitSets = await UnitSet.find({ relatedUserId: userId });

  return (
    <div className="flex flex-1 max-w-[1440px] w-full h-full flex-col items-center">
      {unitSets.map((unitSet) => (
        <div key={unitSet._id.toString()} className="mb-4">
          <TestButton id={unitSet._id.toString()} />
        </div>
      ))}
    </div>
  );
}
