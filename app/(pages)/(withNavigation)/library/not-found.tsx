import { EmptyPage } from "@/entities/results-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ця сторінка ще не функціонує (ಥ﹏ಥ)"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
