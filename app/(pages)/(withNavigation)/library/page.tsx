import LibraryUnitSets from "@/features/library/ui";
import MainTitle from "@/shared/components/MainTitle";

const Library = () => {
  return (
    <div className="max-w-[1146px] w-full px-[16px] md:px-[32px] mx-auto h-full">
      <MainTitle text="Мої вподобання" />

      <LibraryUnitSets />
    </div>
  );
};

export default Library;
