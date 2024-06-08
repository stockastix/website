import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://stockastix.com",
  output: "server",
  adapter: netlify(),
  integrations: [
    react(),
    mdx({
      optimize: {
        // Prevent the optimizer from handling those elements
        ignoreElementNames: ["code"],
      },
    }),
  ],
});
