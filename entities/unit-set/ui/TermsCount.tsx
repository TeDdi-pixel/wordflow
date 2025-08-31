import { getTermsLabel } from "@/shared/utils/unit-set-cover/getTermsLabel";

export const TermsCount = ({ unitsCount }: { unitsCount: number }) => {
  return (
    <p className="w-fit rounded-default px-[8px] py-[4px] bg-bg-accent-2 text-fg">
      {unitsCount} {getTermsLabel(unitsCount)}
    </p>
  );
};
