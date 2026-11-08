---
title: API and JSON
sidebar_position: 17
---
# API and JSON in a few lines

VedoyScript now has an **experimental API adapter** in [Polyglot PR #8](https://github.com/leandervedoy/vedoy-dev-studio/pull/8). It is not merged into the stable compiler, and currently targets HTML builds.

## GET: request JSON

```text
Page "Products".
    Button "Load products".
    When Click "Load products".
        Get "/api/products" as "items".
        Show JSON "items".
```

The browser requests `/api/products`, parses the JSON response, then displays it as text. A matching backend route **must already exist**.

## POST: send a VedoyScript object as JSON

```text
Data.
    Object Order.
        Set product to "smart-plug".
        Set quantity to 2.

Page "Checkout".
    Button "Place order".
    When Click "Place order".
        Post "/api/orders" with "Order" as "saved".
        Show JSON "saved".
```

Forge's HTML adapter generates a JSON POST request using the `Order` Data object. No raw JavaScript or manual `JSON.stringify` is needed.

## Literal JSON import

Existing `Data` with `Object` and `List` is preferred, but an optional beta shortcut accepts a *quoted* JSON document:

```text
Data.
    JSON Settings from "{\"theme\":\"dark\",\"count\":2}".
```

It is validated before the HTML is built. The syntax is intentionally separate from executing JavaScript expressions.

## Boundaries

- Only URLs beginning with `/api/` are accepted by the experimental browser adapter.
- The response limit is 64 KiB; data is rendered as text, not executable HTML.
- API tokens and authentication must stay in the **server**. A client-side request cannot protect a secret.
- Backend validation, rate limits, identity and authorization must be added by the developer.
- Authentication, retries, typed responses, reactive UI binding and other build targets are planned, not implemented here.

Follow [REST API integration](./rest-apis.md) for a practical server example.