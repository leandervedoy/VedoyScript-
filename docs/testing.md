---
title: Testing and validation
sidebar_position: 21
---
# Test features before release

VedoyScript is an experimental language. Every syntax addition should have parser tests, generated-output tests, runtime integration tests and security regression coverage.

## Compiler test command

In the Vedoy Dev Studio source tree on the experimental API branch:

```bash
node --test tests/vedoyscript.test.mjs
node --test tests/forge.test.mjs tests/json-api.test.mjs
node --test polyglot/tests/engine.test.mjs
```

## Quality checks

1. Test the exact `.vds` source against the canonical parser and compiler.
2. Validate generated HTML and JavaScript as actual browser output.
3. Test successful responses, invalid JSON, HTTP failures and resource caps.
4. Check same-origin restrictions and ensure user data cannot become executable HTML.
5. Verify existing Forge and Polyglot projects still compile.

## Website verification

Run `npm run check` in this repository. This validates documentation structure and builds Docusaurus for production. Run the additional static tests with `npm run test:content`.

Keep benchmark claims reproducible: publish source fixtures, compiler versions, CPU/memory measurements and transfer sizes. No marketing benchmark is accepted without comparable feature behavior.