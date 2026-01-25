export const Title = ({ title }: { title: string }) => {
  return (
    <h4 className="text-[16px] font-semibold md:text-[18px] truncate">
      {title}
    </h4>
  );
};
