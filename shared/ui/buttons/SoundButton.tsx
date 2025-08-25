"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import useSound from "@/shared/hooks/useSound";
import SoundActiveIcon from "@/shared/icons/unit/SoundActiveIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { UserResultTerm } from "@/shared/model/types/user-results";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { Language } from "@/shared/model/types/temp-store";

type Props = {
  units?: TypeUnit[];
  resultUnit?: UserResultTerm;
  target: Language;
};

export const SoundButton = ({ units, resultUnit, target }: Props) => {
  const currentUnit = usePracticeStore(
    (state) => units && units[state.termNumber]
  );

  const unitOrResult = units ? currentUnit : resultUnit;
  const { active, handleClick } = useSound(unitOrResult ?? null, target);

  return (
    <IconButton
      icon={active ? <SoundActiveIcon /> : <SoundIcon />}
      handleClick={handleClick}
    />
  );
};
