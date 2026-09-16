import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the real production domain once one is chosen
// (a custom domain, or https://onyinyeigwea.github.io/onyinye-portfolio for
// an unconfigured GitHub Pages project site). It only affects canonical
// URLs, sitemap.xml and Open Graph tags — the site itself works without it.
export default defineConfig({
  site: 'https://onyinyeigwea.github.io',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
