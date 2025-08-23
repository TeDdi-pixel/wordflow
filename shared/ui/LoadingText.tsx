const LoadingText = ({ text }: { text: string }) => {
  return (
    <span className="text-accent font-bold text-sm flex gap-0.5">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-text-bounce"
          style={{ animationDelay: `${i * 75}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default LoadingText;
