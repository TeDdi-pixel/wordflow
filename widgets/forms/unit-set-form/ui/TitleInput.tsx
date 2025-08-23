import { useTempStore } from "@/shared/store/useTempStore";
import { TitleInputProps } from "../model/types";

export const TitleInput = ({ placeholder, defaultValue }: TitleInputProps) => {
  const setUnitSetTitle = useTempStore((state) => state.setUnitSetTitle);
  const unitSetTitle = useTempStore((state) => state.unitSetTitle);

  return (
    <div className="w-full">
      <input
        type="text"
        name="title"
        required
        placeholder={placeholder}
        defaultValue={unitSetTitle ?? defaultValue}
        onChange={(e) => setUnitSetTitle(e.target.value)}
        className="w-full py-[12px] px-4 bg-fg rounded-default mb-8 border-2 border-transparent focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
};
