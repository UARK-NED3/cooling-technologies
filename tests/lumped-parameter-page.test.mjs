import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pagePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../docs/lumped-parameter-model.html',
);

test('lumped-parameter simulator provides an accessible local interaction surface', () => {
  const page = fs.readFileSync(pagePath, 'utf8');

  assert.match(page, /<h1>Lumped-parameter thermal simulator<\/h1>/);
  assert.match(page, /<form class="model-card" id="thermal-rc-form">/);
  assert.match(page, /role="img" aria-labelledby="chart-title chart-description"/);
  assert.match(page, /aria-live="polite"/);
  assert.match(page, /import \{ simulateThermalRc, thermalTimeConstant \}/);
  assert.match(page, /inputs stay in your browser/);
});
