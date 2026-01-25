type Props = {
  text: string;
  marginBottom?: number;
};

const MainTitle = ({ text }: Props) => {
  return (
    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4lx font-bold text-text">
      {text}
    </h1>
  );
};

export default MainTitle;
