"use client";

import { useRef, useState } from "react";
import { TypeUnit } from "../model/types/unit";
import { showError } from "../lib/toasts";
import { UserResultTerm } from "../model/types/user-results";
import { usePracticeStore } from "../store/usePracticeStore";
import { Language } from "../model/types/temp-store";
import { TypeSavedUnit } from "../model/types/saved-unit";

const useSound = (
  currentUnit: TypeUnit | UserResultTerm | TypeSavedUnit["unit"] | null,
  targetLang: Language
) => {
  const [active, setActive] = useState<boolean>(false);
  const currentTermLang = usePracticeStore((state) => state.currentTermLang);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (currentTermLang !== "source" && targetLang !== "ENG") {
      showError(
        `Термін на мові "${targetLang}" не має звуку вимови`,
        crypto.randomUUID()
      );
      setActive(false);
      return;
    }

    if (!currentUnit?.audio) {
      showError("Цей термін нажаль немає звуку вимови", crypto.randomUUID());
      setActive(false);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio(currentUnit.audio);
    audioRef.current.volume = 0.5;

    setActive(true);

    audioRef.current.play().catch(() => {
      setActive(false);
      showError("Не вдалося відтворити звук", crypto.randomUUID());
    });

    audioRef.current.onended = () => {
      setActive(false);
    };
  };
  return { active, handleClick };
};

export default useSound;
