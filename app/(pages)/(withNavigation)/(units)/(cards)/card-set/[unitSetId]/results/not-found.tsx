"use client";

import { EmptyPage } from "@/entities/results-table";
import { useParams } from "next/navigation";

const NotFound = () => {
  const { unitSetId } = useParams();

  return (
    <EmptyPage
      text="У вас поки немає результатів за цією карткою"
      buttonText="Перейти до практики"
      path={unitSetId ? `/card-set/${unitSetId}` : "/"}
    />
  );
};

export default NotFound;
