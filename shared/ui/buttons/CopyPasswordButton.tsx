import { MdContentPasteGo } from "react-icons/md";

type Props = {
  canCopy: boolean;
  handleCopy: () => void;
};

const CopyPasswordButton = ({ handleCopy, canCopy }: Props) => {
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`flex text-accent items-center justify-center cursor-pointer absolute -right-[17px] z-10 -translate-y-1/2 top-1/2 w-[36px] h-[36px] transition-all ${
        canCopy
          ? "scale-100 pointer-events-auto -translate-x-[19px]"
          : "scale-0 translate-x-[0px] pointer-events-none"
      }`}
    >
      <MdContentPasteGo className="text-[22px]" />
    </button>
  );
};

export default CopyPasswordButton;
