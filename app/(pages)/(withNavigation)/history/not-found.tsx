import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Ви ще не маєте історії взаємодій"
      buttonText="Перейти на головну"
      textIcon="┐( ˘_˘ )┌"
      path="/"
    />
  );
};

export default NotFound;
