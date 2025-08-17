import TryAgainButton from "@/shared/components/buttons/TryAgainButton";
import { CorrectAnswersCounter } from "./CorrectAnswersCounter";

type Props = {
  id: string;
  correctAnswers: string;
};

export const TableBottom = ({ id, correctAnswers }: Props) => {
  return (
    <div className="bg-foreground px-5 py-3 rounded-lg font-semibold">
      <div className="w-full flex items-center justify-between">
        <CorrectAnswersCounter correctAnswers={correctAnswers} />

        <TryAgainButton id={id} />
      </div>
    </div>
  );
};
