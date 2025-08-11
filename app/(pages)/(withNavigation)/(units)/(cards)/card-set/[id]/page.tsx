import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { PracticeBoardBlock } from "@/widgets/practice-board";

const CardSet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const unitSet = await getUnitSetForClient(id);

  if (!unitSet) {
    return <div>Unit set not found</div>;
  }

  const units = unitSet.units;

  return <PracticeBoardBlock id={id} units={units} />;
};

export default CardSet;
