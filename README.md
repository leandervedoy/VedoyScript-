<div align="center">

<img src="static/img/website-preview.svg" alt="VedoyScript website preview" width="100%"/>

# VedoyScript

**Less syntax. More creation.**

[Documentation](./docs/intro.md) · [Getting started](./docs/getting-started.md) · [Examples](./examples/) · [API & JSON](./docs/api-json.md) · [Performance](./docs/performance.md)

</div>

VedoyScript is an **experimental readable programming language** with capitalized commands, period-terminated statements and four-space indentation. The current beta handles simple web pages, layouts, compile-time structured data and basic interactions.

## Try the docs website

Requires Node.js 22+:

```bash
npm install
npm run start
```

`npm run check` validates the content and runs a production build. The website uses Docusaurus and includes a marketing homepage, examples, performance discussion and 26 documentation pages, a local search index, a syntax reference and five interactive lessons.

## Language example

```text
Page "Hello".
    Heading "Hello, world!".
    Button "Say hi" as "go".
    When Click "go".
        Show "Hello from VedoyScript!".
```

## API and JSON (experimental)

The experimental [API/JSON compiler adapter](https://github.com/leandervedoy/vedoy-dev-studio/pull/8) generates browser requests from concise VedoyScript:

```text
Data.
    Object Order.
        Set product to "smart-plug".
        Set quantity to 2.
Page "Store".
    Button "Save".
    When Click "Save".
        Post "/api/orders" with "Order" as "saved".
        Show JSON "saved".
```

This feature is not yet merged or deployed. It requires a protected server route under `/api/` and supports HTML output only. See [API guide](./docs/api-json.md).

## Status and ownership

- **VedoyScript**: language grammar, semantics, specification and docs.
- **VedoyPolyglot**: planned central compiler/build tooling and multi-language adapters. [Experimental MVP PR](https://github.com/leandervedoy/vedoy-dev-studio/pull/6).
- **Vedoy Forge**: development experience, editor and project tooling. [Forge beta PR](https://github.com/leandervedoy/vedoy-dev-studio/pull/3).
- The current compiler is still experimental in [Vedoy Dev Studio PR #2](https://github.com/leandervedoy/vedoy-dev-studio/pull/2), and is **not yet extracted** into a standalone language package.

**Performance and brevity:** 80% less source code and fastest runtime are targets, **not verified claims**. See [our methodology](./docs/performance.md).

## Hosting

Import this repository into Vercel. Build with `npm run build`, output directory `build`. Set the actual website URL in `docusaurus.config.js` (currently a placeholder) before production launch.

## License

See [LICENSE](./LICENSE). No compiler source was copied here; review licensing and dependency licenses before public release.
