import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="У вас поки немає жодних збережених термінів ┐( ˘_˘ )┌"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
