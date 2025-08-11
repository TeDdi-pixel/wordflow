import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UserTerms from "@/shared/model/schemas/UserTerms";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { getTermStatus } from "@/shared/utils/unit-set/getTermStatus";
import { TypeCompletedUnit } from "@/store/useUnitPracticeStore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { unitSetId: string } }
) => {
  await createDbConnection();
  try {
    const { unitSetId } = await params;
    const { completedTerms } = await req.json();

    if (!completedTerms || completedTerms.length === 0) return;

    const relatedUserId = await getUserId();

    const unitSetDoc = await UnitSet.findById(unitSetId).lean<TypeUnitSet>();

    if (!unitSetDoc) {
      return NextResponse.json(
        { message: "UnitSet not found" },
        { status: 404 }
      );
    }

    const updatedTerms = unitSetDoc.units
      .map((term) => {
        const completedTerm = completedTerms.find(
          (t: TypeCompletedUnit) => t.termId === term._id.toString()
        );
        if (!completedTerm) return null;
        return {
          _id: term._id,
          term: term.term,
          definition: term.definition,
          unitSetId,
          lastAnswer: completedTerm.lastAnswer,
          status: getTermStatus(completedTerm.checkStatus),
        };
      })
      .filter(Boolean);

    await UserTerms.findOneAndUpdate(
      { relatedUserId },
      { $set: { terms: updatedTerms } },
      { upsert: true, new: true, runValidators: true }
    );
    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { message: "Error updating status", error },
      { status: 500 }
    );
  }
};
