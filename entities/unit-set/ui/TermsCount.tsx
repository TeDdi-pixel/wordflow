import { getTermsLabel } from "@/shared/utils/unit-set-cover/getTermsLabel";

export const TermsCount = ({ unitsCount }: { unitsCount: number }) => {
  return (
    <p className="w-fit rounded-default px-[8px] py-[4px] bg-bg-accent-2 text-fg text-[12px] md:text-[14px]">
      {unitsCount} {getTermsLabel(unitsCount)}
    </p>
  );
};
