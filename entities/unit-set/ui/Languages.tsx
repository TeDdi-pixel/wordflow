import LanguageIcon from "@/shared/icons/unit/LanguageIcon";
import { Language } from "@/shared/model/types/temp-store";
import { CgArrowsExchangeAlt } from "react-icons/cg";

export const Languages = ({
  source,
  target,
  savedUnitsLanguages,
}: {
  source?: Language;
  target?: Language;
  savedUnitsLanguages?: Language[];
}) => {
  if (savedUnitsLanguages && savedUnitsLanguages.length > 0) {
    return (
      <div className="flex items-center gap-2">
        <LanguageIcon />

        <div className="flex items-center gap-1">
          <span>{savedUnitsLanguages.join(", ")}</span>
        </div>
      </div>
    );
  }

  if (source && target) {
    return (
      <div className="flex items-center gap-2">
        <LanguageIcon />

        <div className="flex items-center gap-1">
          <span>{source}</span>

          <CgArrowsExchangeAlt className="text-[20px]" />

          <span>{target}</span>
        </div>
      </div>
    );
  }

  return null;
};
