import { useTempStore } from "@/shared/store/useTempStore";
import { TitleInputProps } from "../model/types";
import { isTouchDevice } from "@/shared/utils/IsTouchDevice";

export const TitleInput = ({ placeholder, defaultValue }: TitleInputProps) => {
  const setUnitSetTitle = useTempStore((state) => state.setUnitSetTitle);
  const unitSetTitle = useTempStore((state) => state.unitSetTitle);

  return (
    <div className="w-full">
      <input
        type="text"
        name="title"
        required
        placeholder={
          isTouchDevice() ? "Створіть назву набору карток" : placeholder
        }
        defaultValue={unitSetTitle ?? defaultValue}
        onChange={(e) => setUnitSetTitle(e.target.value)}
        className="w-full py-3 px-4 text-[14px] md:text-[16px] bg-fg rounded-default mb-3.5 md:mb-8 border-2 border-transparent focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
};
