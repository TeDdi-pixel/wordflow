import { useTempStore } from "@/store/useTempStore";
import { ChangeEvent } from "react";

type Props = {
  placeholder: string;
};

const TitleInput = ({ placeholder }: Props) => {
  const setUnitSetTitle = useTempStore((state) => state.setUnitSetTitle);
  const unitSetTitle = useTempStore((state) => state.unitSetTitle);

  const handleChangeUnitTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setUnitSetTitle(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        name="title"
        required
        placeholder={placeholder}
        defaultValue={unitSetTitle}
        onChange={handleChangeUnitTitle}
        className="w-full py-[12px] px-4 bg-foreground rounded-lg mb-8 focus:ring-2 focus:ring-accent focus:outline-none"
      />
    </div>
  );
};

export default TitleInput;
