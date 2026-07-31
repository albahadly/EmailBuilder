#!/usr/bin/env node
/*
 * Copies APP_VERSION out of index.html into the README's "Current version:" line.
 *
 * index.html is the single source of truth for the version — the README is only a
 * mirror. Run by .github/workflows/sync-version.yml on every push that touches
 * index.html, and safe to run by hand at any time:
 *
 *   node .github/scripts/sync-version.js
 *
 * Exits non-zero if either anchor has moved, so a rename fails loudly in CI
 * instead of silently leaving the README stale.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const appFile = path.join(root, 'index.html');
const readmeFile = path.join(root, 'README.md');

const APP_VERSION_RE = /const APP_VERSION\s*=\s*['"]([^'"]+)['"]/;
/* `.` and `$` both stop at \r, so the file's CRLF endings survive the rewrite. */
const README_LINE_RE = /^Current version: .*$/m;

const app = fs.readFileSync(appFile, 'utf8');
const match = app.match(APP_VERSION_RE);
if (!match) {
  console.error('index.html: no `const APP_VERSION = ...` declaration found.');
  process.exit(1);
}
const version = match[1];

const readme = fs.readFileSync(readmeFile, 'utf8');
if (!README_LINE_RE.test(readme)) {
  console.error('README.md: no `Current version: ...` line found.');
  process.exit(1);
}

const updated = readme.replace(README_LINE_RE, `Current version: ${version}`);
if (updated === readme) {
  console.log(`README.md already reads ${version}; nothing to do.`);
  process.exit(0);
}

fs.writeFileSync(readmeFile, updated);
console.log(`README.md updated to ${version}.`);
