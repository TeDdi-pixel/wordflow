import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  typedRoutes: true,
  turbopack: {
    rules: {
      ".svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "convertColors",
                    params: {
                      currentColor: true,
                    },
                  },
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
        as: ".js",
      },
    },
  },
};
export default nextConfig;
