import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx(), partytown({
  config: {
      resolveUrl: function(url) {
    if (url.hostname === "connect.facebook.net") {
      var proxyUrl = new URL('https://my-reverse-proxy.com/');
      proxyUrl.searchParams.append('url', url.href);
      return proxyUrl;
    }
    return url;
  },
			  forward: ["dataLayer.push","fbq"],
			},
  })],
  image: {
    domains: ["ik.imagekit.io", 'res.cloudinary.com']
  },
  output: "server",
  adapter: netlify()
});
