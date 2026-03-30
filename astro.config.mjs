import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
     storyblok({
      accessToken: env.STORYBLOK_TOKEN,
    }),
  ],
  image: {
    service: squooshImageService(),
  },
});
