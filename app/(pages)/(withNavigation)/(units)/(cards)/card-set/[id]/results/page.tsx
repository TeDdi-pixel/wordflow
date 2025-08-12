import { EmptyResults } from "@/entities/result-table";
import MainTitle from "@/shared/components/MainTitle";
import { ResultTable } from "@/widgets/result-table";
import { getSpecificUnitSet } from "@/widgets/result-table/model/getSpecificUnitSet";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const unitSet = await getSpecificUnitSet(id);

  if (!unitSet || unitSet.length === 0) {
    return <EmptyResults id={id} />;
  }

  return (
    <div className="max-w-[1000px] w-full">
      <MainTitle text="Результати" />

      <ResultTable unitSetId={id} unitSet={unitSet} />
    </div>
  );
};

export default page;
