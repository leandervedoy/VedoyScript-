---
title: Runtimes and platforms
sidebar_position: 25
---
# Runtime support

The current compiler targets browser-oriented HTML and supports experimental generated frontend formats. Listed server targets mostly deliver generated HTML using that target's server runtime.

These do not establish general backend language semantics, full-stack framework integration or native application builds.

## Browser

The browser runs generated JavaScript, not an independent VedoyScript runtime. Any performance claim must account for this output.

## Server

Node.js, Python, Rust and additional generated server targets have examples; many only serve HTML. Backend functions, SQL and user-auth are not complete language features.

## Polyglot

The experimental module bridge uses local Python and JavaScript subprocesses under the user's OS permissions. Do not run untrusted submitted code through that bridge.

## Roadmap

Rust-native compilation, WebAssembly, typed asynchronous operations and platform adapters require independent conformance and compatibility tests.