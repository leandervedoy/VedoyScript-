---
title: Performance
sidebar_position: 14
---
# Performance methodology

We aim to reduce source verbosity without penalizing runtime speed or deployment size.

For equivalent implementations in JS/TS and VedoyScript, track:

- Nonblank, noncomment source lines;
- Generated and compressed output size, including dependencies;
- Cold start and warm runtime p50/p95 latency;
- Memory, CPU and correctness;
- Toolchain build time and developer maintenance effort.

**80% less source code and world's fastest runtime are ambitions, not established facts.** Evaluate with reproducible fixtures, real devices and published test scripts.
