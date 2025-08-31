import createDbConnection from "@/shared/lib/mongoose";
import { SORT_TYPE } from "@/shared/model/constants/sort";
import UnitSet from "@/shared/model/schemas/UnitSet";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { toPlain } from "@/shared/utils/unit-set/toPlain";
import { getFilterLabel } from "@/widgets/filters/model/getFilterLabel";

export const getAllUnitSets = async (
  sort: "createdAsc" | "createdDesc" | "likesDesc" | "termsDesc" | "termsAsc",
  limit: number
): Promise<{
  unitSets: (Omit<TypeUnitSet, "units"> & { unitsCount: number })[];
  filterLabel: string;
  totalDocsCount: number;
}> => {
  await createDbConnection();

  await addTimestampsToUnitSets();

  const unitSets = await UnitSet.aggregate([
    { $addFields: { unitsCount: { $size: "$units" } } },
    { $sort: SORT_TYPE[sort] as any },
    { $project: { units: 0 } },
    { $limit: limit },
  ]);

  const totalDocsCount = await UnitSet.countDocuments();

  return {
    unitSets: toPlain(unitSets),
    filterLabel: getFilterLabel(sort),
    totalDocsCount,
  };
};

export const addTimestampsToUnitSets = async () => {
  try {
    await createDbConnection();

    // Получаем все документы без createdAt
    const docs = await UnitSet.find({
      createdAt: { $exists: false },
    }).sort({ _id: 1 });

    console.log(`Found ${docs.length} documents without timestamps`);

    if (docs.length === 0) {
      console.log("All documents already have timestamps");
      return;
    }

    // Определяем диапазон времени
    const now = new Date();
    const startTime = new Date(now.getTime() - docs.length * 1000);

    // Batch update для лучшей производительности
    const bulkOps = docs.map((doc, index) => {
      const timestamp = new Date(startTime.getTime() + index * 1000);
      return {
        updateOne: {
          filter: { _id: doc._id },
          update: {
            $set: {
              createdAt: timestamp,
              updatedAt: timestamp,
            },
          },
        },
      };
    });

    // Выполняем batch update
    await UnitSet.bulkWrite(bulkOps);

    console.log("Migration completed successfully");
  } catch (err) {
    console.error("Error during migration:", err);
    throw err;
  }
};
