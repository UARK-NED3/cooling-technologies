import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCourseFiles } from '../scripts/check-docs.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('course documentation has required files and resolvable internal Markdown links', () => {
  const errors = validateCourseFiles();
  assert.deepEqual(errors, []);
});

test('professional-education governance files remain release requirements', (t) => {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'cooling-course-check-'));
  t.after(() => fs.rmSync(temporaryRoot, { recursive: true, force: true }));

  const errors = validateCourseFiles(temporaryRoot);

  assert.ok(errors.includes('Missing required file: docs/accessibility.md'));
  assert.ok(errors.includes('Missing required file: docs/nomenclature.md'));
  assert.ok(errors.includes('Missing required file: docs/maintenance-and-governance.md'));
  assert.ok(errors.includes('Missing required file: docs/ned3-applied-examples.md'));
  assert.ok(errors.includes('Missing required file: docs/self-paced-study-manual.md'));
  assert.ok(errors.includes('Missing required file: docs/engineering-start-here.md'));
  assert.ok(errors.includes('Missing required file: docs/engineering-tools.html'));
  assert.ok(errors.includes('Missing required file: docs/assets/screening-calculators.mjs'));
  assert.ok(errors.includes('Missing required file: docs/lumped-parameter-model.html'));
  assert.ok(errors.includes('Missing required file: docs/assets/lumped-parameter.mjs'));
  assert.ok(errors.includes('Missing required file: docs/technology-atlas.md'));
  assert.ok(errors.includes('Missing required file: docs/state-of-practice.md'));
  assert.ok(errors.includes('Missing required file: docs/validation-ladder.md'));
  assert.ok(errors.includes('Missing required file: docs/case-studies/cold-plate-cfd-screening.md'));
});

test('repository README exposes the same Module 7 and course-home entry points as Pages', () => {
  const repositoryReadme = fs.readFileSync(path.join(repoRoot, 'README.md'), 'utf8');

  assert.match(repositoryReadme, /7\. \[Lumped-parameter models and simulation\]\(docs\/modules\/07-lumped-parameter-models\.md\)/);
  assert.match(repositoryReadme, /https:\/\/uark-ned3\.github\.io\/cooling-technologies\//);
  assert.match(repositoryReadme, /https:\/\/uark-ned3\.github\.io\/cooling-technologies\/modules\/07-lumped-parameter-models\.html/);
});
