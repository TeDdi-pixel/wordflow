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
