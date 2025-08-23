import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Виникла помилка із завантаженням юніта (ಥ﹏ಥ)"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
