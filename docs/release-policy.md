---
title: Release and compatibility policy
sidebar_position: 26
---
# Release discipline

VedoyScript is early-stage, so compatibility and test coverage matter more than headline claims.

## Status labels

- **Supported beta:** Implementation and automated tests exist in a development branch.
- **Experimental:** Feature works for a narrow set of use cases but lacks broader hardening.
- **Planned:** Described in a proposal; do not treat as implemented.
- **Stable:** Reserved for a tagged release with migration guidance and conformance tests.

## Compatibility

Preserve deprecated imports during compiler consolidation. Treat changes to grammar, generated APIs, module interfaces and output layouts as potential breaking changes.

## Versioning

Publish release notes containing features, known limitations, benchmark links and migration instructions. Semantic versioning becomes useful when independent packages and CLI releases are available.

## Security issues

See the repository SECURITY file and avoid posting unpublished vulnerability details in public issues.