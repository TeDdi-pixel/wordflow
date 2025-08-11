type Props = {
  correctAnswers: string;
};

export const CorrectAnswersCounter = ({ correctAnswers }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      Правильних відповідей:{" "}
      <span className="block font-extrabold py-1 px-2 rounded-default bg-background-accent-2 text-text-2">
        {correctAnswers}
      </span>
    </div>
  );
};
