---
title: Architecture
sidebar_position: 11
---
# Separation of responsibilities

**VedoyScript** owns the syntax, semantics and language specification. **VedoyPolyglot** is intended to own cross-language build orchestration, compilation adapters and the module bridge. **Vedoy Forge** provides the IDE and project workflows.

The compiler is still experimentally implemented in the Vedoy Dev Studio development branches. Moving it into Polyglot must preserve backwards-compatible interfaces and pass equivalent tests before removing old paths.

The standalone website does not ship the production language compiler.
