import EmptyPage from "@/shared/ui/EmptyPage";

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
