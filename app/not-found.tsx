import { EmptyPage } from "@/entities/results-table";
import { Navigation } from "@/widgets/navigation";

const NotFound = () => {
  return (
    <main className="flex max-w-[1440px] w-full h-full items-center flex-col grow justify-start">
      <Navigation />
      <EmptyPage
        text="Помилка 404. Потрібна сторінка не знайдена (ಥ﹏ಥ)"
        buttonText="Перейти на головну"
        path="/"
      />
    </main>
  );
};

export default NotFound;
