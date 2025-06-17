import { OperationResult, TypeUser } from "@/shared/lib/types/types";

export type InitialRegForm = TypeUser &
  OperationResult<"SIGN_UP_SUCCESS", "SIGN_UP_ERROR"> & {
    verifyEmail: string;
    verifyPassword: string;
  };
