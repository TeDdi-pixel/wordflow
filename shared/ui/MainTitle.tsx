type Props = {
  text: string;
  marginBottom?: number;
};

const MainTitle = ({ text, marginBottom = 50 }: Props) => {
  return (
    <h1 className={`text-4xl font-bold text-text mb-[${marginBottom}px]`}>
      {text}
    </h1>
  );
};

export default MainTitle;
