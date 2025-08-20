"use client";

import { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";

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
            background: "#5a3a4a",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-toast-bg)",
          },
        },
        success: {
          style: {
            background: "#3a4a5a",
          },
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-toast-bg)",
          },
        },

        loading: {
          icon: <Spinner />,
          style: {
            background: "#2d2a3d",
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
