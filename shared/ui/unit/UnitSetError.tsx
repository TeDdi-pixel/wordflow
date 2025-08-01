const UnitSetError = ({ error }: { error: string }) => {
  return (
    error && (
      <div className="text-text-2 bg-accent w-full py-[16px] px-[32px] rounded-default mb-[32px]">
        Помилка: {error}
      </div>
    )
  );
};

export default UnitSetError;
