import { getAllUnitSets } from "@/entities/unit-set/api/getAllUnitSets";
import MainTitle from "@/shared/ui/MainTitle";
import { notFound } from "next/navigation";
import { Filter } from "@/widgets/filters";
import { TypeSort } from "@/shared/model/types/types";
import { UnitSets } from "./UnitSets";
import { getUserEmail, getUserName } from "@/shared/lib/session";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ sort?: TypeSort }>;
}) => {
  const sort = (await searchParams)?.sort || "createdAsc";
  const limit = 9;

  const { unitSets, filterLabel, totalDocsCount } = await getAllUnitSets(
    sort,
    limit
  );

  if (unitSets.length === 0) return notFound();

  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <div className="flex items-center justify-between mb-[50px]">
        <MainTitle text="Усі набори" marginBottom={0} />

        <Filter filterLabel={filterLabel || "Спочатку старі"} />
      </div>

      <UnitSets
        initialUnitSets={unitSets}
        sort={sort ?? "createdAsc"}
        totalDocsCount={totalDocsCount}
      />
    </div>
  );
};

export default Home;
