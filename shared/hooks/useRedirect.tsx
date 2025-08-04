"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const useRedirect = (type: string, path: string) => {
  useEffect(() => {
    if (type === "SIGN_UP_SUCCESS") {
      redirect(path);
    }
  }, [type]);
};

export default useRedirect;
