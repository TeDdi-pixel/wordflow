import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ви ще не створили жодного юніта ┐( ˘_˘ )┌"
      buttonText="Створити юніт(картку)"
      path="/create-card-set"
    />
  );
};

export default NotFound;
