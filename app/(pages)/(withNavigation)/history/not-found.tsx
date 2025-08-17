import { EmptyPage } from "@/entities/results-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ви ще не маєте історії взаємодій"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
