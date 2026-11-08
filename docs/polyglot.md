---
title: Polyglot integration
sidebar_position: 12
---
# Many languages, one project

The experimental [VedoyPolyglot MVP](https://github.com/leandervedoy/vedoy-dev-studio/pull/6) demonstrates a `.vdp` project descriptor with a VedoyScript entry and local Python/JavaScript subprocess modules.

Local module processes are **not sandboxed**. Never execute untrusted users' code in a shared host. TypeScript, Rust, C#, C++ and other adapters are planned, not implemented. Polyglot is an optional framework layer; VedoyScript should remain independently usable.
