import EmptyPage from "@/shared/ui/EmptyPage";

const NotFound = () => {
  return (
    <EmptyPage
      text="Помилка при завантаженні наборів головної сторінки (ಥ﹏ಥ)"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
