"use client";

import EmptyPage from "@/shared/ui/EmptyPage";
import { Route } from "next";
import { useParams } from "next/navigation";

const NotFound = () => {
  const { unitSetId } = useParams();

  return (
    <EmptyPage
      text="У вас поки немає результатів за цією карткою ┐( ˘_˘ )┌"
      buttonText="Перейти до практики"
      path={(unitSetId ? `/card-set/${unitSetId}` : "/") as Route}
    />
  );
};

export default NotFound;
