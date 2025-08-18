const Loader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 -translate-y-1/2">
      <div className="w-[36px] h-[36px] rounded-full border-dashed border-4 border-background-accent-2 border-t-background-accent animate-spin"></div>
      <span className="text-accent font-bold text-sm flex gap-0.5">
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "0ms" }}
        >
          L
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "75ms" }}
        >
          o
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "150ms" }}
        >
          a
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "225ms" }}
        >
          d
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "300ms" }}
        >
          i
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "375ms" }}
        >
          n
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "450ms" }}
        >
          g
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "525ms" }}
        >
          .
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "600ms" }}
        >
          .
        </span>
        <span
          className="inline-block animate-text-bounce"
          style={{ animationDelay: "675ms" }}
        >
          .
        </span>
      </span>
    </div>
  );
};

export default Loader;
