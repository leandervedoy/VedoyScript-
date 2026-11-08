---
title: Integrating REST APIs
sidebar_position: 18
---
# Connect to a REST API

The shorthand `Get "/api/products" as "items".` uses a **same-origin endpoint**. External APIs should be accessed through a server route, where API keys and authorization are protected.

## Example: a small Next.js API route

Create `app/api/products/route.js` in a Next.js backend:

```javascript
export async function GET() {
  const products = [
    { id: 'smart-plug', name: 'Smart Plug', priceNok: 299 },
    { id: 'led-lamp', name: 'LED Lamp', priceNok: 399 }
  ];
  return Response.json({ products });
}
```

Then call it from your VedoyScript page:

```text
Page "My Store".
    Button "Browse".
    When Click "Browse".
        Get "/api/products" as "catalog".
        Show JSON "catalog".
```

This example provides public mock product data. For customer-specific or paid API routes, use a verified server-side session, tenant-scoped authorization, validated input and appropriate abuse protections.

## POST example

Create `app/api/orders/route.js`:

```javascript
export async function POST(request) {
  // DEMO ONLY. Production orders require login, CSRF defenses,
  // ownership checks, price validation and payment verification.
  const body = await request.json();
  if (body?.product !== 'smart-plug' || body?.quantity !== 2) {
    return Response.json({ error: 'Invalid demo order' }, { status: 422 });
  }
  return Response.json({ ok: true, orderId: 'demo-001' });
}
```

See [API and JSON](./api-json.md) for the matching `.vds` source. The VedoyScript CLI generates HTML and JavaScript, **not** the backend routes above.

## Error handling

The experimental adapter shows a generic failure message for unreachable routes, non-2xx status, invalid JSON or oversized responses. Better error handling and typed contracts are roadmap work.