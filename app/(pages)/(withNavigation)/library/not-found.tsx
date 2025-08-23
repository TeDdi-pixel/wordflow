import EmptyPage from "@/shared/ui/EmptyPage";

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
