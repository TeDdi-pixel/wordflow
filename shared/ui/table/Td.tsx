import { ReactNode } from "react";

type Props = {
  text?: string;
  first?: boolean;
  last?: boolean;
  icon?: ReactNode;
};

const Td = ({ text, first, last, icon }: Props) => {
  return (
    <td
      className={`px-4 py-2 text-center truncate ${
        first ? "rounded-l-default" : ""
      } ${last ? "rounded-r-default" : ""}`}
    >
      {icon}
      {text}
    </td>
  );
};

export default Td;
