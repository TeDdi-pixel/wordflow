import MainTitle from "@/shared/ui/MainTitle";
import { notFound, redirect } from "next/navigation";
import { getUserId } from "@/shared/lib/session";
import { ResultTable } from "@/widgets/results-table";
import { getUserResultTerms } from "@/widgets/results-table/api/getUserResult";

const page = async ({ params }: { params: Promise<{ unitSetId: string }> }) => {
  const { unitSetId } = await params;

  const userId = await getUserId();

  if (!userId) return redirect("/login");

  const resultTerms = await getUserResultTerms(userId, unitSetId);

  if (resultTerms.length === 0) notFound();

  return (
    <div className="max-w-[1000px] w-full">
      <MainTitle text="Результати" />

      <ResultTable unitSetId={unitSetId} resultSetTerms={resultTerms} />
    </div>
  );
};

export default page;
