import { CheckStatus } from "@/store/useUnitPracticeStore";

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
