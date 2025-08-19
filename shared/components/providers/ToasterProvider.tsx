"use client";

import { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "var(--color-foreground)",
          color: "var(--color-text)",
          padding: "16px",
          borderRadius: "8px",
          maxWidth: "360px",
        },
        error: {
          style: {
            background: "var(--color-accent)",
            color: "var(--color-text-2)",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "#ffffff",
          },
        },
        success: {
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "#ffffff",
          },
        },
        loading: {
          icon: <Spinner />,
        },
        duration: 4000,
      }}
      position="top-center"
      reverseOrder
    />
  );
}
