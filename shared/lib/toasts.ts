import toast from "react-hot-toast";

export const showError = (message: string, errorId?: string) =>
  toast.error(message, { id: errorId });
