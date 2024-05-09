import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    domains: ["ik.imagekit.io",'res.cloudinary.com']
  },
  output: "server",
  adapter: netlify()
});
