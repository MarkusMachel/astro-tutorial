// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://voluble-dusk-6cc153.netlify.app/",
  integrations: [preact()],
});