import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import { PRACTICE_BOARD_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UsersResults from "@/shared/model/schemas/UsersResults";
import { TypeCompletedUnit } from "@/shared/model/types/practice-store";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { getTermStatus } from "@/shared/utils/unit-set/getTermStatus";
import { NextRequest, NextResponse } from "next/server";

const ERRORS = PRACTICE_BOARD_ERROR_MESSAGES;

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ unitSetId: string }> }
) => {
  await createDbConnection();

  try {
    const { unitSetId } = await params;

    const { completedTerms } = await req.json();

    if (completedTerms.length === 0) {
      return NextResponse.json(
        { message: ERRORS.INVALID_DATA },
        { status: 400 }
      );
    }

    const relatedUserId = await getUserId();

    const unitSetDoc = await UnitSet.findById(unitSetId).lean<TypeUnitSet>();

    if (!unitSetDoc) {
      return NextResponse.json(
        { message: ERRORS.UNIT_SET_NOT_FOUND },
        { status: 404 }
      );
    }

    const updatedTermsForUnitSet = unitSetDoc.units
      .map((term) => {
        const completedTerm = completedTerms.find(
          (t: TypeCompletedUnit) => t.termId === term._id.toString()
        );

        if (!completedTerm) return null;
        return {
          _id: term._id,
          lastAnswer: completedTerm.lastAnswer,
          status: getTermStatus(completedTerm.checkStatus),
        };
      })
      .filter(Boolean);

    const userResult = await UsersResults.findOne({ relatedUserId, unitSetId });

    if (!userResult) {
      const newDoc = new UsersResults({
        relatedUserId,
        unitSetId,
        terms: updatedTermsForUnitSet,
      });
      await newDoc.save();
    } else {
      userResult.terms = updatedTermsForUnitSet;
      await userResult.save();
    }

    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { message: "Internal server error", error: String(error) },
      { status: 500 }
    );
  }
};
