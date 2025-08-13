import { EmptyPage } from "@/entities/result-table";

const NotFound = () => {
  return (
    <EmptyPage
      text="Помилка 404. Потрібна сторінка не знайдена"
      buttonText="Перейти на головну"
      path="/"
    />
  );
};

export default NotFound;
