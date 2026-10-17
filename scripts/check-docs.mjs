import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const requiredFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'LICENSE',
  'docs/index.md',
  'docs/course-map.md',
  'docs/evidence-map.md',
  'docs/references-and-tools.md',
  'docs/accessibility.md',
  'docs/maintenance-and-governance.md',
  'docs/ned3-applied-examples.md',
  'docs/self-paced-study-manual.md',
  'docs/professional-workshop.md',
  'docs/assessment.md',
  'docs/facilitator-guide.md',
  'docs/modules/01-why-cooling-matters.md',
  'docs/modules/02-thermal-fundamentals.md',
  'docs/modules/03-cooling-mechanisms.md',
  'docs/modules/04-system-architectures.md',
  'docs/modules/05-performance-energy-sustainability.md',
  'docs/modules/06-screening-decision.md',
];

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
  });
}

function isExternalLink(href) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
}

function linkTargets(markdown) {
  const targets = [];
  const markdownLink = /\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)/g;
  for (const match of markdown.matchAll(markdownLink)) {
    const href = match[1].replace(/^<|>$/g, '');
    const pathPart = href.split('#', 1)[0];
    if (pathPart && !isExternalLink(pathPart)) targets.push(pathPart);
  }
  return targets;
}

export function validateCourseFiles(rootDirectory = repoRoot) {
  const errors = [];

  for (const relativePath of requiredFiles) {
    if (!fs.existsSync(path.join(rootDirectory, relativePath))) {
      errors.push(`Missing required file: ${relativePath}`);
    }
  }

  for (const filePath of markdownFiles(rootDirectory)) {
    const markdown = fs.readFileSync(filePath, 'utf8');
    for (const target of linkTargets(markdown)) {
      const resolvedTarget = path.resolve(path.dirname(filePath), decodeURIComponent(target));
      if (!fs.existsSync(resolvedTarget)) {
        errors.push(`${path.relative(rootDirectory, filePath)} links to missing file: ${target}`);
      }
    }
  }

  return errors.sort();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = validateCourseFiles();
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Documentation checks passed.');
  }
}
