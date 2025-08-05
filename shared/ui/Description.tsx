import { useTempStore } from "@/store/useTempStore";
import { ChangeEvent } from "react";

type Props = {
  placeholder: string;
  defaultValue: string;
};

const Description = ({ placeholder, defaultValue }: Props) => {
  const unitSetDescription = useTempStore((state) => state.unitSetDescription);
  const setUnitSetDescription = useTempStore(
    (state) => state.setUnitSetDescription
  );
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUnitSetDescription(e.target.value);
  };
  return (
    <textarea
      placeholder={placeholder}
      name="description"
      defaultValue={unitSetDescription ?? defaultValue}
      onChange={handleChange}
      className="w-full h-[112px] py-[12px] px-4 bg-foreground rounded-lg mb-[50px] resize-none focus:ring-2 focus:ring-accent focus:outline-none"
    />
  );
};

export default Description;
