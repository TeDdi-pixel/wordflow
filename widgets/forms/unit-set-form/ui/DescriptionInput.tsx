import { useTempStore } from "@/shared/store/useTempStore";
import { DescriptionInputProps } from "../model/types";

export const DescriptionInput = ({
  placeholder,
  defaultValue,
}: DescriptionInputProps) => {
  const unitSetDescription = useTempStore((state) => state.unitSetDescription);
  const setUnitSetDescription = useTempStore(
    (state) => state.setUnitSetDescription,
  );

  return (
    <textarea
      placeholder={placeholder}
      name="description"
      defaultValue={unitSetDescription ?? defaultValue}
      onChange={(e) => setUnitSetDescription(e.target.value)}
      className="w-full h-[80px] md:h-[112px] text-[14px] md:text-[16px] py-3 px-4 bg-fg rounded-default mb-3.5 md:mb-8 border-2 border-transparent resize-none focus:outline-none focus:border-accent"
    />
  );
};
