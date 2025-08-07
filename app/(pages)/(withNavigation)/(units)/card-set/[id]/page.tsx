import createDbConnection from "@/shared/lib/mongoose";
import { TypeUnitSet } from "@/shared/model/types/unit";
import UnitSetSchema from "@/shared/model/schemas/UnitSet";
import {
  UnitPracticeHeader,
  UnitPracticeInput,
  UnitPracticeNavButtons,
  UnitPracticeTerm,
} from "@/entities/unit-practice";

const CardSet = async ({ params }: { params: Promise<{ id: string }> }) => {
  await createDbConnection();

  const { id } = await params;

  const unitSet = await UnitSetSchema.findById(id).lean<TypeUnitSet>();

  if (!unitSet) {
    return <div>Unit set not found</div>;
  }

  const units = unitSet?.units || [];

  return (
    <div className="max-w-[821px] w-full">
      <div className="mx-auto h-[506px] w-full bg-foreground rounded-lg p-8 flex flex-col items-center justify-between mb-4">
        <UnitPracticeHeader />
        <UnitPracticeTerm units={units} />
        <UnitPracticeInput units={units} />
      </div>
      <UnitPracticeNavButtons units={units} />
    </div>
  );
};

export default CardSet;
