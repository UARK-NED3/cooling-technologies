import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('course supplies a textbook-style TeX renderer through the shared Cayman head include', () => {
  const headInclude = fs.readFileSync(path.join(repoRoot, 'docs/_includes/head-custom.html'), 'utf8');

  assert.match(headInclude, /MathJax\s*=/);
  assert.match(headInclude, /tex-chtml\.js/);
  assert.match(headInclude, /displayMath/);
  assert.match(headInclude, /inlineMath/);
});

test('course publishes a canonical nomenclature and uses display math in the thermal-fundamentals module', () => {
  const nomenclature = fs.readFileSync(path.join(repoRoot, 'docs/nomenclature.md'), 'utf8');
  const moduleTwo = fs.readFileSync(path.join(repoRoot, 'docs/modules/02-thermal-fundamentals.md'), 'utf8');

  assert.match(nomenclature, /\\dot\{Q\}/);
  assert.match(nomenclature, /R_\{\\mathrm\{th\}\}/);
  assert.match(nomenclature, /Sign convention/);
  assert.match(moduleTwo, /\$\$[\s\S]*?R_\{\\mathrm\{th\}\}[\s\S]*?\$\$/);
});

test('multiline control-volume balances use a TeX alignment rather than Markdown list syntax', () => {
  const moduleOne = fs.readFileSync(path.join(repoRoot, 'docs/modules/01-why-cooling-matters.md'), 'utf8');

  assert.match(moduleOne, /\\begin\{aligned\}/);
  assert.doesNotMatch(moduleOne, /^\+ \\sum_/m);
  assert.doesNotMatch(moduleOne, /^- \\sum_/m);
});
