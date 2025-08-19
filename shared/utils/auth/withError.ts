export function withError<T>(prevState: T, error: string): T {
  return {
    ...prevState,
    error,
    type: "ERROR",
    errorId: crypto.randomUUID(),
  };
}
