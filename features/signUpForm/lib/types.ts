import { OperationResult, TypeUser } from "@/shared/model/types/types";

export type InitialRegForm = TypeUser &
  OperationResult<"SIGN_UP_SUCCESS", "SIGN_UP_ERROR"> & {
    verifyEmail: string;
    verifyPassword: string;
  };
