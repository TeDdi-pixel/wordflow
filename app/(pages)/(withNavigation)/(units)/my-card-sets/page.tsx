import BookmarkIcon from "@/shared/icons/unit/BookmarkIcon";
import SoundIcon from "@/shared/icons/unit/SoundIcon";
import StarIcon from "@/shared/icons/unit/StarIcon";
import TipIcon from "@/shared/icons/unit/TipIcon";
import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";

const MyCardSet = async () => {
  await createDbConnection();
  const userId = await getUserId();

  const data = await UnitSet.find({ relatedUserId: userId });

  return;
};

export default MyCardSet;
