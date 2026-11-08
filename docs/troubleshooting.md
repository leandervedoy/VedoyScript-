---
title: Troubleshooting
sidebar_position: 19
---
# Fix common VedoyScript issues

## "Commands must start with a capital letter"

Use `Page`, `Heading`, `Button` and `When Click`, not lowercase command names.

## "Commands must end with a period"

Complete instructions with `.`:

```text
Page "Demo".
    Text "Hello".
```

## "Indentation must use multiples of 4 spaces"

Use exactly four spaces for a direct child and eight for a grandchild. Tabs aren't supported in the beta grammar.

## "Unknown command"

The beta intentionally rejects arbitrary JavaScript statements. [Capabilities](./capabilities.md) distinguishes implemented language constructs from planned features.

## API request unavailable

The experimental `Get`/`Post` adapter requires a reachable same-origin `/api/` backend endpoint. If you only open the HTML file locally, there is no matching API server. See [REST API integration](./rest-apis.md).

## Website build fails

Install Node.js 22+, run `npm install`, then `npm run check`. GitHub Actions checks all Markdown links and the Docusaurus production build. Check workflow logs for the first actual build error.