import { OperationResult, TypeUser } from "@/shared/lib/types/types";

export type InitialLoginForm = Omit<TypeUser, "username"> &
  OperationResult<"SIGN_IN_SUCCESS", "SIGN_IN_ERROR">;
