import { EmptyPage } from "@/entities/results-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Жодного набора карток ще не створено (ಥ﹏ಥ)"
      buttonText="Повернутися на головну"
      path="/"
    />
  );
};

export default NotFound;
