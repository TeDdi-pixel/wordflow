"use client";

import { Toaster } from "react-hot-toast";
import Spinner from "../ui/Spinner";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "var(--color-toast-bg)",
          color: "var(--color-accent)",
          padding: "16px",
          maxWidth: "360px",
        },
        error: {
          style: {
            background: "var(--color-fg)",
            color: "var(--color-error)",
            border: "2px solid #5a3a4a",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-fg)",
          },
        },
        success: {
          style: {
            background: "var(--color-fg)",
            color: "var(--color-success)",
            border: "2px solid #3a4a5a",
          },
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-toast-bg)",
          },
        },

        loading: {
          icon: <Spinner />,
          style: {
            background: "var(--color-fg)",
            border: "2px solid #2d2a3d",
          },
        },
        duration: 4000,
      }}
      position="top-center"
      reverseOrder
    />
  );
}
