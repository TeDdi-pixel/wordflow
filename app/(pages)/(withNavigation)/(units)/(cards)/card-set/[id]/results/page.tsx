import MainTitle from "@/shared/components/MainTitle";
import { ResultTable } from "@/widgets/result-table";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div className="max-w-[1000px] w-full">
      <MainTitle text="Результати" />

      <ResultTable unitSetId={id} />
    </div>
  );
};

export default page;
