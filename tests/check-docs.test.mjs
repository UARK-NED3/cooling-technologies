import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateCourseFiles } from '../scripts/check-docs.mjs';

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
  assert.ok(errors.includes('Missing required file: docs/validation-ladder.md'));
  assert.ok(errors.includes('Missing required file: docs/case-studies/cold-plate-cfd-screening.md'));
});
