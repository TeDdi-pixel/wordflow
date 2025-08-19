import LoadingText from "./LoadingText";

const Loader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 -translate-y-1/2">
      <div className="w-[36px] h-[36px] rounded-full border-dashed border-4 border-background-accent-2 border-t-background-accent animate-spin"></div>
      <LoadingText text="Loading..." />
    </div>
  );
};

export default Loader;
