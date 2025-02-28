import type { NextConfig } from "next";
import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPigment(nextConfig, {
  theme: extendTheme({
    colorSchemes: {
      light: {
        colors: {
          background: "white",
          foreground: "black",
        },
      },
      dark: {
        colors: {
          background: "black",
          foreground: "white",
        },
      },
    },
  }),
});
