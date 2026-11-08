# What QuantumTest needs from VedoyScript

QuantumTest is a separate product. Its existing TypeScript/Supabase components should **not** be rewritten until VedoyScript has mature, tested capabilities.

## Minimum prerequisites for a QuantumTest implementation
1. Rust compiler with robust lexer/parser, AST, type checking, diagnostics, modules, versioned packages and stable CLI.
2. Backend HTTP routing, JSON, authentication, authorization, async I/O, HTTP client, job queues, retries, idempotency, structured logs and observability.
3. PostgreSQL driver with parameterized SQL, connection pooling, transactions, migrations and typed query results.
4. Browser-facing UI: HTML templates, scoped CSS, reactive state, form handling and accessible components.
5. Test runner, dependency management, CI, reproducible builds, container deployment and secrets handling.
6. Security controls: SSRF protection including DNS rebinding, egress restrictions, target ownership verification, sandboxed browser runs, rate limits, safe test credentials and retention policies.
7. Vedoy Shield integration through an optional, versioned API or SDK. No security certification implied.
8. Integrations with QuantumTest's scan scheduler, browser automation and optional Vedoy Monetize Statistics via stable HTTP APIs.
9. Performance and correctness benchmarks comparing equivalent TypeScript and VedoyScript workloads.

## Implementation strategy
- Phase A: Build and validate VedoyScript standalone.
- Phase B: Prototype one isolated QuantumTest component in VedoyScript (for example report formatting), with feature parity tests.
- Phase C: Add backend and SQL only after security and integration tests pass.
- Phase D: Consider broader migration after measured performance, reliability and maintenance gains.

**Current status:** these are requirements and milestones, not implemented features.
