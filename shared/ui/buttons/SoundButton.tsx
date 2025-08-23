"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import useSound from "@/shared/hooks/useSound";
import SoundActiveIcon from "@/shared/icons/unit/SoundActiveIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { UserResultTerm } from "@/shared/model/types/user-results";
import { usePracticeStore } from "@/shared/store/usePracticeStore";

type Props = {
  units?: TypeUnit[];
  resultUnit?: UserResultTerm;
};

export const SoundButton = ({ units, resultUnit }: Props) => {
  const currentUnit = usePracticeStore(
    (state) => units && units[state.termNumber]
  );
  const unitOrResult = units ? currentUnit : resultUnit;
  const { active, handleClick } = useSound(unitOrResult ?? null);

  return (
    <IconButton
      icon={active ? <SoundActiveIcon /> : <SoundIcon />}
      handleClick={handleClick}
    />
  );
};
