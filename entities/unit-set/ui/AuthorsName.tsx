export const AuthorsName = ({ authorsName }: { authorsName: string }) => {
  return <span className="max-w-[160px] w-fit truncate">by {authorsName}</span>;
};
