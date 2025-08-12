const AuthError = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center border-2 border-transparent px-4 py-1 min-h-[50px] pointer-events-none select-none bg-tip text-text-2 text-[14px] md:max-w-[268px] w-full rounded-default">
        {message}
      </div>
    </div>
  );
};

export default AuthError;
