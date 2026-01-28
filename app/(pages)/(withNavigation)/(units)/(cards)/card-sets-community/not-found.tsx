import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Жодного набора карток ще не створено"
      buttonText="Повернутися на головну"
      textIcon="(ಥ﹏ಥ)"
      path="/"
    />
  );
};

export default NotFound;
