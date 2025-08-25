import ToLanguageIcon from "@/shared/icons/unit/ToLanguageIcon";
import { Language } from "@/shared/model/types/temp-store";

export const Languages = ({
  source,
  target,
}: {
  source: Language;
  target: Language;
}) => {
  return (
    <div className="flex gap-3 items-center text-accent">
      <span className="w-[29px] text-[16px]">{source}</span>

      <ToLanguageIcon />

      <span className="w-[29px] text-[16px]">{target}</span>
    </div>
  );
};
