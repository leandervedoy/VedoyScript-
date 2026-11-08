---
title: Language and module ownership
sidebar_position: 23
---
# One compiler, clear ownership

VedoyScript, VedoyPolyglot and Forge have different responsibilities.

| Layer | Responsibility |
| --- | --- |
| VedoyScript | Source syntax and language specification |
| VedoyPolyglot | Canonical compiler and optional language adapters |
| Vedoy Forge | IDE, project lifecycle and local preview |
| Vedoy Advisor | Optional technology recommendations (planned) |

The compiler is consolidated experimentally under `polyglot/compiler/vedoyscript.mjs` in the API branch. A compatibility re-export keeps existing Forge clients working.

## Interoperability

The experimental local Polyglot MVP supports Python and JavaScript subprocess modules. That is not the same as compiling Python or C# directly into browser JavaScript.

See [Architecture](./architecture.md) and [Polyglot](./polyglot.md).