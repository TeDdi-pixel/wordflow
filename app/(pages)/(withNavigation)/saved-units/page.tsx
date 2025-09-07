import MainTitle from "@/shared/ui/MainTitle";
import { SavedWordsTable } from "@/widgets/saved-units-table";

const page = () => {
  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Мої збережені терміни" />

      <SavedWordsTable />
    </div>
  );
};

export default page;
