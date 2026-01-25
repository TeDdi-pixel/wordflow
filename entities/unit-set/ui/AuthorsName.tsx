export const AuthorsName = ({ authorsName }: { authorsName: string }) => {
  return (
    <span className="max-w-[160px] w-fit truncate text-[12px] md:text-[14px]">
      by {authorsName}
    </span>
  );
};
