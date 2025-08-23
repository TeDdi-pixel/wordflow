import { getTermsLabel } from "@/shared/utils/unit-set-card/getTermsLabel";

export const TermsCount = ({ termsCount }: { termsCount: number }) => {
  return (
    <p className="w-fit rounded-default px-[8px] py-[4px] bg-bg-accent-2 text-fg">
      {termsCount} {getTermsLabel(termsCount)}
    </p>
  );
};
