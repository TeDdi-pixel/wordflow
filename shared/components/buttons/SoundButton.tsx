"use client";

import IconButton from "@/shared/components/buttons/IconButton";
import useSound from "@/shared/hooks/useSound";
import SoundActiveIcon from "@/shared/icons/unit/SoundActiveIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import { TypeUnit } from "@/shared/model/types/unit";
import { TypeUserTermItem } from "@/shared/model/types/user-terms";
import { usePracticeStore } from "@/store/usePracticeStore";

type Props = {
  units?: TypeUnit[];
  resultUnit?: TypeUserTermItem;
};

export const SoundButton = ({ units, resultUnit }: Props) => {
  const currentUnit = usePracticeStore(
    (state) => units && units[state.termNumber]
  );

  const unitOrResult = units ? currentUnit : resultUnit;

  console.log(unitOrResult);

  if (!unitOrResult) return null;

  const { active, handleClick } = useSound(unitOrResult);

  return (
    <IconButton
      icon={active ? <SoundActiveIcon /> : <SoundIcon />}
      handleClick={handleClick}
    />
  );
};
