// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: "source",
  publicDir: "resources",

  site: "https://infinite-kemonoyagi.github.io/",

  build: {
    format: "file",
    assets: "resources",
  },
});
