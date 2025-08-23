import { useTempStore } from "@/store/useTempStore";
import { DescriptionInputProps } from "../model/types";

export const DescriptionInput = ({
  placeholder,
  defaultValue,
}: DescriptionInputProps) => {
  const unitSetDescription = useTempStore((state) => state.unitSetDescription);
  const setUnitSetDescription = useTempStore(
    (state) => state.setUnitSetDescription
  );

  return (
    <textarea
      placeholder={placeholder}
      name="description"
      defaultValue={unitSetDescription ?? defaultValue}
      onChange={(e) => setUnitSetDescription(e.target.value)}
      className="w-full h-[112px] py-[12px] px-4 bg-fg rounded-default mb-[32px] border-2 border-transparent resize-none focus:outline-none focus:border-accent"
    />
  );
};
