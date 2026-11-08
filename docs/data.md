---
title: Data
sidebar_position: 4
---
# Structured data

The `Data.` block supports values such as strings, numbers, booleans, lists and objects without handwritten JSON. For example:

```text
Data.
    Set Product to "Smart Plug".
    Set Price to 299.
    Set Available to True.
Page "$Product".
    Heading "$Product".
```

This is compile-time structured content. It is not a database client or live reactive state. For production secrets, use protected server-side storage, never browser-compiled source.
