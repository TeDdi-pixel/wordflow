export const THead = () => {
  return (
    <thead>
      <tr className="h-[57px]">
        <th
          className="text-center px-4 py-2 text-accent"
          style={{ minWidth: "200px" }}
        >
          Термін
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="text-center px-4 py-2 text-accent"
          style={{ minWidth: "200px" }}
        >
          Транскрипція
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="text-center px-4 py-2 text-accent"
          style={{ minWidth: "200px" }}
        >
          Визначення
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="text-center px-4 py-2 text-accent"
          style={{ minWidth: "200px" }}
        >
          Моя відповідь
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="text-center px-4 py-2 text-accent"
          style={{ maxWidth: "75px" }}
        >
          Статус
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="text-center px-4 py-2 text-accent"
          style={{ maxWidth: "150px" }}
        >
          Дії
        </th>
      </tr>
    </thead>
  );
};
