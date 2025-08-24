export const TranslatedHint = ({
  handleHintClick,
  isHintVisible,
  hintText,
}: {
  handleHintClick: () => void;
  isHintVisible: boolean;
  hintText: string;
}) => {
  return (
    <div
      onClick={handleHintClick}
      className={`min-w-[45px] h-[25px] rounded-default absolute transition-all scale-0 flex items-center ${
        isHintVisible
          ? "text-[14px] py-0.5 px-2 hover:opacity-100 opacity-40 cursor-pointer pointer-events-auto scale-100 top-0 -translate-y-[6px] text-fg z-50 bg-bg-accent-2"
          : "opacity-0 pointer-events-none translate-y-0"
      }`}
    >
      {hintText}
    </div>
  );
};
