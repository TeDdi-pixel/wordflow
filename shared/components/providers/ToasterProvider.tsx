"use client";

import { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "var(--color-foreground)",
          color: "var(--color-text-2)",
          padding: "16px",
          border: "1px solid var(--color-accent)",
          borderRadius: "8px",
          maxWidth: "360px",
        },
        error: {
          style: {
            background: "var(--color-foreground)",
            color: "var(--color-error)",
            border: "1px solid var(--color-error)",
            borderRadius: "0.5rem",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-foreground)",
          },
        },
        success: {
          style: {
            background: "var(--color-foreground)",
            color: "var(--color-success)",
            border: "1px solid var(--color-success)",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-foreground)",
          },
        },
        loading: {
          style: {
            background: "var(--color-foreground)",
          },
          icon: <Spinner />,
        },
        duration: 4000,
      }}
      position="top-center"
      reverseOrder
    />
  );
}
