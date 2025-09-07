"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import useSound from "@/shared/hooks/useSound";
import SoundActiveIcon from "@/shared/icons/unit/SoundActiveIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { UserResultTerm } from "@/shared/model/types/user-results";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import { Language } from "@/shared/model/types/temp-store";
import { TypeSavedUnit } from "@/shared/model/types/saved-unit";

type Props = {
  units?: TypeUnit[];
  resultUnit?: UserResultTerm;
  target: Language;
  savedUnit?: TypeSavedUnit["unit"];
};

export const SoundButton = ({
  units,
  resultUnit,
  target,
  savedUnit,
}: Props) => {
  const currentUnit = usePracticeStore((state) => {
    if (units && units[state.termNumber]) return units[state.termNumber];
    if (resultUnit) return resultUnit;
    if (savedUnit) return savedUnit;
    return null;
  });

  const { active, handleClick } = useSound(currentUnit, target);

  return currentUnit?.audio ? (
    <IconButton
      icon={active ? <SoundActiveIcon /> : <SoundIcon />}
      handleClick={handleClick}
    />
  ) : null;
};
