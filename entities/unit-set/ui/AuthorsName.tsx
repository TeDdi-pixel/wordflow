export const AuthorsName = ({ authorsName }: { authorsName: string }) => {
  return (
    <span className="group-hover:text-white transition-colors duration-300">
      by {authorsName}
    </span>
  );
};
