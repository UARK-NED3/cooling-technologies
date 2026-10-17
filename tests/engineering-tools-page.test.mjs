import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pagePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../docs/engineering-tools.html',
);

test('engineering tools page uses HTML content instead of literal Markdown', () => {
  const page = fs.readFileSync(pagePath, 'utf8');

  assert.match(page, /<h1>Engineering screening tools<\/h1>/);
  assert.match(page, /<h2>Interpretation and limits<\/h2>/);
  assert.doesNotMatch(page, /^# Engineering screening tools$/m);
  assert.doesNotMatch(page, /^## Interpretation and limits$/m);
});
