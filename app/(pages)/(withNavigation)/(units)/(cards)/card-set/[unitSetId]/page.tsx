import { getUnitSetTitle } from "@/entities/unit-set/api/getUnitSetTitle";
import { PracticeBoard, PracticeBoardControls } from "@/widgets/practice-board";
import { notFound } from "next/navigation";

const CardSet = async ({
  params,
}: {
  params: Promise<{ unitSetId: string }>;
}) => {
  const { unitSetId } = await params;

  if (!unitSetId) notFound();

  const title = await getUnitSetTitle(unitSetId);

  return (
    <div className="max-w-[821px] w-full max-h-max">
      <h2 className="text-[28px] flex gap-2 items-center mb-[32px]">{title}</h2>

      <PracticeBoard unitSetId={unitSetId} />

      <PracticeBoardControls unitSetId={unitSetId} />
    </div>
  );
};

export default CardSet;
