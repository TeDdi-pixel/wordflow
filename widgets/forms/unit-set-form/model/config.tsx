"use client";

import { UnitSetType } from "@/shared/model/types/unit";
import { TypeInitialForm } from "./types";

const typeMap = new Map<string, string>([["/create-card-set", "cards"]]);

export const initialForm = (pathname: string): TypeInitialForm => ({
  title: "",
  description: "",
  units: [],
  status: "",
  unitSetType: typeMap.get(pathname) as UnitSetType,
  error: "",
});
