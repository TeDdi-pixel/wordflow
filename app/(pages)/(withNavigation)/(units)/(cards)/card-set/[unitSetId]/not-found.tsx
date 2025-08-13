import { EmptyPage } from "@/entities/result-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Виникла помилка із завантаженням юніта"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
