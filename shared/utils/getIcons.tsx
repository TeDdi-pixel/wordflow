import { FaCheck } from "react-icons/fa";
import MistakeIcon from "../icons/unit/MistakeIcon";
import { IoSend } from "react-icons/io5";

export const getIcon = (checkStatus: "MISTAKE" | "CORRECTNESS" | string) => {
  switch (checkStatus) {
    case "MISTAKE":
      return <MistakeIcon />;
    case "CORRECTNESS":
      return <FaCheck className="text-success" />;
    default:
      return <IoSend />;
  }
};
