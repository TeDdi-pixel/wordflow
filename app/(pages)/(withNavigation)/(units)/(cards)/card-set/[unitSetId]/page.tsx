import { EmptyPage } from "@/entities/result-table";
import { getUnitSetForClient } from "@/shared/utils/unit-set/getUnitSetForClient";
import { PracticeBoardBlock } from "@/widgets/practice-board";

const CardSet = async ({
  params,
}: {
  params: Promise<{ unitSetId: string }>;
}) => {
  const { unitSetId } = await params;
  const unitSet = await getUnitSetForClient(unitSetId);

  if (!unitSet || !unitSetId) {
    return (
      <EmptyPage
        text="Виникла помилка із завантаженням юніта"
        buttonText="Перейти на головну"
        path="/"
      />
    );
  }

  const units = unitSet.units;

  return <PracticeBoardBlock id={unitSetId} units={units} />;
};

export default CardSet;
