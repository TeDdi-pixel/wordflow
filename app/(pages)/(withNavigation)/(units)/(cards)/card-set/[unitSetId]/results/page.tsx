import { EmptyPage } from "@/entities/result-table";
import MainTitle from "@/shared/components/MainTitle";
import { ResultTable } from "@/widgets/result-table";
import { getSpecificUnitSet } from "@/widgets/result-table/model/getSpecificUnitSet";

const page = async ({ params }: { params: Promise<{ unitSetId: string }> }) => {
  const { unitSetId } = await params;
  const unitSet = await getSpecificUnitSet(unitSetId);

  if (!unitSet || unitSet.length === 0) {
    return (
      <EmptyPage
        buttonText="Перейти до практики"
        text="У вас поки немає результатів за цією карткою"
        path={`/card-set/${unitSetId}`}
      />
    );
  }

  return (
    <div className="max-w-[1000px] w-full">
      <MainTitle text="Результати" />

      <ResultTable unitSetId={unitSetId} unitSet={unitSet} />
    </div>
  );
};

export default page;
