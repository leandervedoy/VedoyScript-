---
title: Syntax
sidebar_position: 3
---
# Syntax reference

VedoyScript uses *capitalized commands*, *periods*, and *four-space blocks*. Example:

```text
Data.
    Set Product to "Smart Plug".
    Set Price to 299.

Page "$Product".
    Heading "$Product".
    Text "Price: $Price NOK".
    Section.
        Subheading "About".
        Text "A simple smart-home product".
```

Supported elements include `Page`, `Section`, `Row`, `Column`, `Heading`, `Subheading`, `Text`, `Button`, `Image`, `Link` and `Input`. UI click handlers support `When Click`, `Show` and `Set Text of`.

These are beta features. Expressions, user-defined functions, loops, typed application state and async language semantics are roadmap items.
