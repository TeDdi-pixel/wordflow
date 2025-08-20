"use client";

import { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "var(--color-background-accent)",
          color: "var(--color-accent)",
          padding: "16px",
          maxWidth: "360px",
        },
        error: {
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-text-2)",
          },
        },
        success: {
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-text-2)",
          },
        },

        loading: {
          icon: (
            <Spinner
              foregroundColor="border-t-background-accent"
              mainColor="border-foreground"
            />
          ),
          style: {
            background: "var(--color-background-accent)",
            padding: "16px",
            maxWidth: "360px",
          },
        },
        duration: 4000,
      }}
      position="top-center"
      reverseOrder
    />
  );
}
