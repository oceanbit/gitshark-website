import { defineConfig } from "astro/config";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), preact({ compat: true })]
});