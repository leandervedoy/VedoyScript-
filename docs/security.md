---
title: Security
sidebar_position: 13
---
# Security model

The beta escapes HTML in generated pages and validates URL protocols. These measures do **not** constitute a security audit.

Never ship credentials to frontend output. For backend work, validate requests and responses, enforce tenant authorization and resource quotas, and isolate external code. The planned Vedoy Shield integration must have an independently reviewed threat model and cryptographic design.
