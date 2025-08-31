import { getAllUnitSets } from "@/entities/unit-set/api/getAllUnitSets";
import { TypeSort } from "@/shared/model/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const sort = (await req.nextUrl.searchParams.get("sort")) || "createdAsc";
  const limit = await req.nextUrl.searchParams.get("limit");
  const limitNum = parseInt(limit ?? "9", 10);

  console.log(sort);

  const { unitSets } = await getAllUnitSets(sort as TypeSort, limitNum);
  return NextResponse.json({ unitSets });
}
