import { EmptyPage } from "@/entities/result-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ви ще не створили жодного юніта"
      buttonText="Створити юніт(картку)"
      path="/create-card-set"
    />
  );
};

export default NotFound;
