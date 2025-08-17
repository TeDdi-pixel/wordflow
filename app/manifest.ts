import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "WordFlow",
    short_name: "WordFlow",
    description:
      "WordFlow допомагає вчити, повторювати та закріплювати слова для ефективного запам’ятовування.",
    lang: "uk",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#2a2134",
    theme_color: "#17131c",
    categories: ["education", "productivity"],
    icons: [
      {
        src: "/icon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
