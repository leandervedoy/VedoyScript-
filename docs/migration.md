---
title: Migrating an existing page
sidebar_position: 24
---
# Start small with VedoyScript

Do not rewrite a production app solely to adopt a language beta. Start with an isolated landing page or static component.

## Typical HTML markup

```html
<main>
  <h1>Hello</h1>
  <p>Welcome to our site.</p>
</main>
```

## VedoyScript

```text
Page "Home".
    Heading "Hello".
    Text "Welcome to our site.".
```

These are not exact general-purpose equivalents: the `Page` declaration also defines document metadata and generated styling. For interactive apps, use supported click handlers or keep the existing JavaScript implementation until missing language features are verified.

## Risk checklist

Check accessibility, generated file size, routing, integration, SEO, localization, test coverage and security before switching any critical workload.

[Getting started](./getting-started.md) provides the current CLI flow.