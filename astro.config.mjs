// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // site: 'https://scriva-osteopathe.fr',
  site: 'https://Mouflon23.github.io',
  base: '/scriva-osteopathe',
  output: 'static',  // Ensure Astro outputs a static site
  outDir: 'dist',    // This must match your GitHub workflow config
});
