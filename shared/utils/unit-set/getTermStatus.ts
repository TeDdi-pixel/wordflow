import { CheckStatus } from "@/shared/model/types/practice-store";

export const getTermStatus = (checkStatus: CheckStatus) => {
  switch (checkStatus) {
    case "MISTAKE":
      return "unlearned";
    case "CORRECTNESS":
      return "learned";
    case "EXCLUDED":
      return "excluded";
    default:
      return "unlearned";
  }
};
