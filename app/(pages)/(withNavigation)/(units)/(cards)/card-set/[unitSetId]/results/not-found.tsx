import { EmptyPage } from "@/entities/result-table";

const NotFound = ({
  searchParams,
}: {
  searchParams?: { unitSetId?: string };
}) => {
  const unitSetId = searchParams?.unitSetId;

  return (
    <EmptyPage
      text="У вас поки немає результатів за цією карткою"
      buttonText="Перейти до практики"
      path={unitSetId ? `/card-set/${unitSetId}` : "/"}
    />
  );
};

export default NotFound;
