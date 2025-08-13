import createDbConnection from "@/shared/lib/mongoose";
import { getUserId } from "@/shared/lib/session";
import { PRACTICE_BOARD_ERROR_MESSAGES } from "@/shared/model/constants/errors";
import UnitSet from "@/shared/model/schemas/UnitSet";
import UserTerms from "@/shared/model/schemas/UserTerms";
import { TypeCompletedUnit } from "@/shared/model/types/practice-store";
import { TypeUnitSet } from "@/shared/model/types/unit";
import { TypeUserTermItem } from "@/shared/model/types/user-terms";
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

    if (!Array.isArray(completedTerms) || completedTerms.length === 0) {
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
          term: term.term,
          definition: term.definition,
          unitSetId,
          lastAnswer: completedTerm.lastAnswer,
          status: getTermStatus(completedTerm.checkStatus),
        };
      })
      .filter(Boolean);

    const userTermsDoc = await UserTerms.findOne({ relatedUserId });

    if (!userTermsDoc) {
      const newDoc = new UserTerms({
        relatedUserId,
        terms: updatedTermsForUnitSet,
      });
      await newDoc.save();
    } else {
      const newTermsArray = userTermsDoc.terms
        .filter(
          (term: TypeUserTermItem) => term.unitSetId.toString() !== unitSetId
        )
        .concat(updatedTermsForUnitSet);

      userTermsDoc.terms = newTermsArray;

      await userTermsDoc.save();
    }

    return NextResponse.json(
      { message: "Status updated successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    let status = 500;
    let message = "Internal server error";
    const errorDetails = error instanceof Error ? error.message : String(error);

    const normalized = errorDetails.toLowerCase();
    if (normalized.includes("unitset not found")) {
      status = 404;
      message = ERRORS.UNIT_SET_NOT_FOUND;
    } else if (
      normalized.includes("validation failed") ||
      normalized.includes("cast to objectid failed")
    ) {
      status = 400;
      message = ERRORS.INVALID_DATA;
    } else if (normalized.includes("database unavailable")) {
      status = 503;
      message = ERRORS.DATABASE_UNAVAILABLE;
    }

    return NextResponse.json({ message, error: errorDetails }, { status });
  }
};
