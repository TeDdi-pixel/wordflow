import { MouseEventHandler, ReactNode } from "react";

export type IconProps = {
  isPasswordSafe: boolean;
  handleMouseEnter: MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: MouseEventHandler<HTMLDivElement>;
};

export type StatusIconHoverProps = {
  isPasswordSafe: boolean;
  handleMouseEnter: MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: MouseEventHandler<HTMLDivElement>;
  successIcon: ReactNode;
  errorIcon: ReactNode;
  tipMessage: boolean;
};

export type TypeInitialForm = {
  _id: "";
  username: "";
  email: "";
  verifyEmail: "";
  password: "";
  verifyPassword: "";
  error: "";
  operationType: "";
  errorId: "";
};
