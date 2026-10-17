# Contributing

Thank you for helping improve this open course.

## What belongs here

- Corrections to physical explanations, units, equations, and assumptions.
- Clearer diagrams, accessible descriptions, and runnable examples.
- New worked examples whose data, code, and sources can be shared publicly.

## Before opening a pull request

1. State the engineering regime and any material assumptions.
2. Identify the source for reported properties, correlations, or performance data.
3. Keep illustrative examples distinct from measured or validated results.
4. Do not include student records, restricted research material, proprietary data, or vendor material that cannot be redistributed.
5. Run `node scripts/check-docs.mjs`, check all Markdown links, and render equations in GitHub's preview.

## Reuse and contribution terms

By contributing repository-authored material, you confirm that you have the right to share it publicly and agree to release that contribution under the repository's [CC BY 4.0 license](LICENSE). Do not contribute third-party material unless its redistribution and attribution terms are documented in the pull request.

## Style

Use SI units by default. Define symbols on first use, write connected explanatory paragraphs, and state a calculation's boundary conditions and validity limits. Prefer a small, verifiable improvement over a broad untested rewrite.
