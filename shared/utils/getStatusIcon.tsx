import { FaCheck } from "react-icons/fa";
import { TypeTermStatus } from "../model/types/unit";
import { PiExcludeSquareBold } from "react-icons/pi";
import MistakeIcon from "../icons/unit/MistakeIcon";

export const getStatusIcon = (status: TypeTermStatus) => {
  switch (status) {
    case "learned":
      return <FaCheck className="text-success" />;
    case "unlearned":
      return <MistakeIcon />;
    case "excluded":
      return <MistakeIcon />;
    default:
      return null;
  }
};
