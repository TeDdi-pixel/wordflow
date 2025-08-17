import { HistoryUnitSets } from "@/features/history";
import MainTitle from "@/shared/components/MainTitle";
const History = async () => {
  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Історія взаємодій" />

      <HistoryUnitSets />
    </div>
  );
};

export default History;
