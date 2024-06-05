import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  image: {
    domains: ["ik.imagekit.io", 'res.cloudinary.com']
  },
  output: "static",
  adapter: netlify()
});
