// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Rokkitt",
      cssVariable: "--font-rokkitt",
      weights: [300],
      styles:["italic"],
      fallbacks: ["Inter", "sans-serif"],
      subsets:["Daryanani Delgado Daniel ."]
    },{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  adapter: vercel()
});