"use client";

import IconButton from "@/shared/ui/buttons/IconButton";
import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import { usePracticeStore } from "@/shared/store/usePracticeStore";
import toast from "react-hot-toast";
import LoadingText from "@/shared/ui/LoadingText";
import { useEffect, useMemo, useState } from "react";
import BookmarkActiveIcon from "@/shared/icons/unit/BookmarkActiveIcon";
import axios from "axios";
import { deleteUnit } from "../../delete-saved-unit/api/deleteUnit";
import { saveUnit } from "../api/saveUnit";

type Props = {
  unitSetId: string;
  unitId?: string;
};

export const BookmarkButton = ({ unitSetId, unitId }: Props) => {
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  const currentUnitId = usePracticeStore(
    (state) => state.currentUnitId ?? unitId
  );

  const handleSave = async () => {
    if (!currentUnitId) return;

    if (savedWords.includes(currentUnitId)) {
      toast
        .promise(deleteUnit(unitSetId, currentUnitId), {
          loading: <LoadingText text="Видаляємо..." />,
          success: "Термін був успішно видалений",
          error: "Сталася помилка при видаленні слова",
        })
        .then((res) => {
          if (res?.data?.ok) {
            setHasChecked(false);
            setSavedWords((prev) =>
              prev.filter((wordId) => wordId !== currentUnitId)
            );
          }
        });
    } else {
      toast
        .promise(saveUnit(unitSetId, currentUnitId), {
          loading: <LoadingText text="Зберігаємо..." />,
          success: "Термін був успішно збережений",
          error: "Сталася помилка при збереженні слова",
        })
        .then((res) => {
          if (res?.data?.ok) {
            setHasChecked(true);
            setSavedWords((prev) => [...prev, currentUnitId]);
          }
        });
    }
  };

  useEffect(() => {
    if (!currentUnitId || hasChecked) return;

    const checkSavedWord = async () => {
      try {
        const res = await axios.get(`/api/users/saved-units/${unitSetId}`);
        if (res.data.ok) setSavedWords(res.data.savedUnitsIds);
        setHasChecked(true);
      } catch (err) {
        console.error(err);
      }
    };

    checkSavedWord();
  }, [currentUnitId, hasChecked]);

  const isSaved = useMemo(() => {
    return currentUnitId && savedWords.includes(currentUnitId);
  }, [currentUnitId, savedWords]);

  return (
    <IconButton
      icon={isSaved ? <BookmarkActiveIcon /> : <BookmarkIcon />}
      handleClick={handleSave}
    />
  );
};
