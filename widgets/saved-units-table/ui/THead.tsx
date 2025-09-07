export const THead = () => {
  return (
    <thead>
      <tr className="h-[57px]">
        <th
          className="px-4 py-2 text-center text-accent"
          style={{ minWidth: "200px" }}
        >
          #
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="px-4 py-2 text-center text-accent"
          style={{ minWidth: "200px" }}
        >
          Термін
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="px-4 py-2 text-center text-accent"
          style={{ minWidth: "200px" }}
        >
          Транскрипція
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="px-4 py-2 text-center text-accent"
          style={{ minWidth: "200px" }}
        >
          Визначення
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="px-4 py-2 text-center text-accent"
          style={{ minWidth: "200px" }}
        >
          Джерело
        </th>

        <th style={{ width: "5px" }} />

        <th
          className="px-4 py-2 text-center text-accent"
          style={{ maxWidth: "150px" }}
        >
          Дії
        </th>
      </tr>
    </thead>
  );
};
