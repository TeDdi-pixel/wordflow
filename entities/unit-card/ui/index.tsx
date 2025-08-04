import TestButton from "@/app/(pages)/(withNavigation)/(home)/ui/TestButton";

export const UnitCard = ({
  unitId,
  title,
  termsCount,
  authorsName,
}: {
  unitId: string;
  title: string;
  termsCount: number;
  authorsName: string;
}) => {
  return (
    <div className="max-w-[371px] h-[210px] rounded-default w-full bg-foreground">
      <h4>{title}</h4>
      <p>Кількість термінів: {termsCount}</p>
      <p>Author's name: {authorsName}</p>
      <TestButton id={unitId} />
    </div>
  );
};
