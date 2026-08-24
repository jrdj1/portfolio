// One-off script to render the Open Graph share image from an SVG using the
// site's own design tokens. Not part of the build/runtime — run manually
// with `node scripts/generate-og.mjs` whenever the OG image needs updating.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public');
mkdirSync(outDir, { recursive: true });

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#05070d" />
  <rect width="${width}" height="${height}" fill="url(#glow)" />
  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="#1e2536" stroke-width="2" />

  <text x="90" y="220" font-family="JetBrains Mono, monospace" font-size="26" fill="#22d3ee" letter-spacing="1">
    INGENIERO DE SOFTWARE JÚNIOR · JUNIOR SOFTWARE ENGINEER
  </text>

  <text x="90" y="300" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="700" fill="#e6e9f2">
    Jorge Julián
  </text>
  <text x="90" y="375" font-family="Inter, Arial, sans-serif" font-size="64" font-weight="700" fill="#e6e9f2">
    Vicedo
  </text>

  <text x="90" y="440" font-family="Inter, Arial, sans-serif" font-size="28" fill="#8b93a7">
    Full-stack · Distributed systems · Astro / React / Node.js
  </text>

  <rect x="90" y="480" width="120" height="4" fill="#22d3ee" />

  <text x="90" y="540" font-family="JetBrains Mono, monospace" font-size="22" fill="#8b93a7">
    github.com/jrdj1/portfolio
  </text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, 'og.png'));

console.log('Generated public/og.png');
