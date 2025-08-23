type Props = {
  mainColor?: string;
  hoverColorForeground?: string;
  hoverMainColor?: string;
  foregroundColor?: string;
};

const Spinner = ({
  mainColor = "border-bg-accent-2",
  hoverColorForeground = "group-hover:border-t-bg-accent",
  hoverMainColor = "group-hover:border-accent",
  foregroundColor = "border-t-bg-accent",
}: Props) => {
  return (
    <div
      className={`w-[24px] h-[24px] rounded-full border-4 ${mainColor} ${hoverMainColor} ${foregroundColor} ${hoverColorForeground} border-dashed  animate-spin transition-colors`}
    ></div>
  );
};

export default Spinner;
