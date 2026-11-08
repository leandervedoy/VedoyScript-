# VedoyScript: standalone language architecture

## Non-negotiable product boundary
**VedoyScript is an independent programming language.** The Vedoy Forge framework owns integration with other programming languages through its separate Polyglot Engine. VedoyScript does not depend on Forge, TypeScript, JavaScript libraries, or a polyglot adapter to compile and run its supported core programs.

## Language repository responsibilities
- Rust compiler: lexer, parser, AST, type inference/checker, typed IR, optimization passes, code generation, diagnostics and CLI.
- Native language capabilities: modules, generics, errors, async, HTTP, HTML templates, scoped CSS, backend routing, parameterized SQL, and a small standard library.
- Targets: native executable or WASM where supported; optional JS emission for browsers because browser runtimes require supported targets. JS output does not mean JS must be authored by developers.
- Standalone CLI: `vedoy build`, `vedoy run`, `vedoy test`, `vedoy fmt`, `vedoy check`; no Forge installation required.
- Shield integration: optional standalone package or API, never required for core compilation.

## Framework responsibilities (separate repository)
- Vedoy Forge owns Polyglot Engine and adapters for TypeScript, JavaScript, Python, C#, etc.
- Forge may call the VedoyScript compiler through a stable CLI, library API or versioned artifact format.
- Forge coordinates mixed-language builds and dependency resolution; the language compiler never imports Forge.
- Forge is optional for VedoyScript-only applications.

## Dependency direction
```text
Vedoy Forge -> Polyglot Engine -> VedoyScript compiler (optional)
                                   ^ independent
Developer -> VedoyScript CLI ------|
```
**Forbidden:** VedoyScript core -> Forge, VedoyScript core -> Polyglot Engine, mandatory TypeScript adapter.

## Quality gates
- 80% source-code reduction is a benchmark target, not a measured claim.
- Independent `cargo test` and CLI integration tests.
- Strict semantic correctness, sandboxed build tools, reproducible binaries, cross-platform builds and performance benchmarks.
- Do not describe HTML/CSS/SQL/Shield as implemented until working, tested code exists.
