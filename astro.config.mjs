// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "League Gothic",
      cssVariable: "--font-league-gothic",
      weights: ["400", "700"],
      styles: ["normal"],
    }
  ]
});
