type Props = {
  mainColor?: string;
  hoverColorForeground?: string;
  hoverMainColor?: string;
  foregroundColor?: string;
};

const Spinner = ({
  mainColor = "border-background-accent-2",
  hoverColorForeground = "group-hover:border-t-background-accent",
  hoverMainColor = "group-hover:border-accent",
  foregroundColor = "border-t-background-accent",
}: Props) => {
  return (
    <div
      className={`w-[24px] h-[24px] rounded-full border-4 ${mainColor} ${hoverMainColor} ${foregroundColor} ${hoverColorForeground} border-dashed  animate-spin transition-colors duration-150 ease-out`}
    ></div>
  );
};

export default Spinner;
