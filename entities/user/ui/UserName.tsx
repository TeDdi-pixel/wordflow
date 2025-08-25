export const UserName = ({ displayName }: { displayName: string }) => {
  return (
    <p className="flex group-hover:text-text transition-colors">
      {displayName}
    </p>
  );
};
