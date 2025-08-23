export function withError<T>(prevState: T, error: string): T {
  return {
    ...prevState,
    error,
    status: "ERROR",
  };
}
