---
title: Frequently asked questions
sidebar_position: 20
---
# Frequently asked questions

## Can VedoyScript replace JavaScript or TypeScript today?

Not for general production development. It currently covers a narrow subset of web UI and static data. Read the [capability matrix](./capabilities.md).

## Is it 80% less code?

That's a product target, not a confirmed statistic. Compare matched functionality, code complexity and generated output before making public claims.

## Is VedoyScript faster than JavaScript?

No verified general-purpose speed advantage exists yet. Source-code length does not determine runtime performance. See [performance testing](./performance.md).

## Does Python run in the browser?

Not with the current local module bridge. The experimental Polyglot engine runs Python as a separate trusted local process. A production server bridge remains future work.

## What does the VedoyScript repo contain?

The public repo contains the website and language docs. Experimental compilation lives in Vedoy Dev Studio / VedoyPolyglot branches. See [architecture](./architecture.md).

## Can I call my own API?

The experimental HTML adapter allows same-origin GET/POST requests; implement the API server separately and secure its endpoints.

## What about native mobile apps and games?

These are roadmap projects. No publicly verified production build capability exists yet.