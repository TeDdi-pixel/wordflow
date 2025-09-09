import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ви ще не створили жодної картки ┐( ˘_˘ )┌"
      buttonText="Створити картку"
      path="/create-card-set"
    />
  );
};

export default NotFound;
