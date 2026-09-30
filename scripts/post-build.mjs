import fs from 'node:fs';
import path from 'node:path';

const publicHeadersPath = path.resolve('public/_headers');
const distHeadersPath = path.resolve('dist/_headers');
const distSubHeadersPath = path.resolve('dist/chapter21/_headers');

if (fs.existsSync(publicHeadersPath)) {
  const content = fs.readFileSync(publicHeadersPath, 'utf-8');
  const lines = content.split('\n');
  const transformedLines = lines.map(line => {
    // If line starts with / (path rule), prefix with /chapter21
    if (line.startsWith('/')) {
      return `/chapter21${line}`;
    }
    return line;
  });

  // Ensure dist directory exists
  if (!fs.existsSync(path.resolve('dist'))) {
    fs.mkdirSync(path.resolve('dist'), { recursive: true });
  }

  fs.writeFileSync(distHeadersPath, transformedLines.join('\n'), 'utf-8');
  console.log('✓ Successfully generated dist/_headers with /chapter21 prefix');
}

// Clean up any copied _headers inside dist/chapter21 so dist only contains chapter21/ and _headers
if (fs.existsSync(distSubHeadersPath)) {
  fs.unlinkSync(distSubHeadersPath);
  console.log('✓ Cleaned up redundant dist/chapter21/_headers');
}

// Ensure no _worker.js, robots.txt, or sitemap.xml in dist root or dist/chapter21/
const forbiddenFiles = [
  'dist/_worker.js',
  'dist/robots.txt',
  'dist/sitemap.xml',
  'dist/chapter21/_worker.js',
  'dist/chapter21/robots.txt',
  'dist/chapter21/sitemap.xml',
];

for (const file of forbiddenFiles) {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log(`✓ Removed forbidden file: ${file}`);
  }
}
