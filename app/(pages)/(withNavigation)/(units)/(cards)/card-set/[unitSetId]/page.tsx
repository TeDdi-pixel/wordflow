import { PracticeBoardBlock } from "@/widgets/practice-board";
import { notFound } from "next/navigation";

const CardSet = async ({
  params,
}: {
  params: Promise<{ unitSetId: string }>;
}) => {
  const { unitSetId } = await params;

  if (!unitSetId) notFound();

  return <PracticeBoardBlock unitSetId={unitSetId} />;
};

export default CardSet;
