import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { PracticeBoardBlock } from "@/widgets/practice-board";
import { notFound } from "next/navigation";

const CardSet = async ({
  params,
}: {
  params: Promise<{ unitSetId: string }>;
}) => {
  const { unitSetId } = await params;
  const unitSet = await getUnitSetForClient(unitSetId);

  if (!unitSet || !unitSetId) notFound();

  const units = unitSet.units;

  return <PracticeBoardBlock id={unitSetId} units={units} />;
};

export default CardSet;
