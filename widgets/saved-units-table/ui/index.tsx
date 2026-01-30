import { notFound } from "next/navigation";
import { getSavedUnits } from "../api/getSavedUnits";
import { getUserId } from "@/shared/lib/session";
import { SavedWordsClient } from "./SavedWordsClient";

export const SavedWordsTable = async () => {
  const userId = await getUserId();
  const savedUnits = await getSavedUnits(userId);

  if (!savedUnits.length) return notFound();

  return <SavedWordsClient initialUnits={savedUnits} />;
};
