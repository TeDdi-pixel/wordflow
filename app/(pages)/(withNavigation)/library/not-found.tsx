import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="У вас поки немає жодних вподобань"
      textIcon="┐( ˘_˘ )┌"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
