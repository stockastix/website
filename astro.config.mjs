import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://stockastix.com",
  output: "server",
  adapter: netlify(),
});
