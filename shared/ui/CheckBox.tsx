const CheckBox = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-2 w-full ml-0.5">
      <input
        type="checkbox"
        id="rememberMe"
        className="w-5 h-5 appearance-none rounded-[4px] flex items-center justify-center bg-fg checked:before:content-['✔']"
      />

      <label htmlFor="rememberMe" className="text-text">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
