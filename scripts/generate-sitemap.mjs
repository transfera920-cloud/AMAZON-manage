import fs from 'node:fs';
import path from 'node:path';

// Centralized lastmod date (ISO 8601 date)
export const LAST_MODIFIED_DATE = '2026-09-30';

const targetDir = path.resolve('dist/chapter21');
const targetFile = path.join(targetDir, 'chapter21-sitemap-entries.xml');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://amazon-hike.com/chapter21/</loc>
    <lastmod>${LAST_MODIFIED_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

fs.writeFileSync(targetFile, sitemapContent.trim() + '\n', 'utf-8');
console.log('✓ Successfully generated dist/chapter21/chapter21-sitemap-entries.xml');
