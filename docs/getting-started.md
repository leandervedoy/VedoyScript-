---
title: Getting started
sidebar_position: 2
---
# Your first VedoyScript page

Create `hello.vds`:

```text
Page "Hello".
    Heading "Hello, VedoyScript!".
    Text "Make code feel simple.".
    Button "Click me" as "start".
    When Click "start".
        Show "Hello!".
```

The experimental compiler currently lives in [Vedoy Dev Studio PR #2](https://github.com/leandervedoy/vedoy-dev-studio/pull/2). On its compiler branch, run `node bin/vedoyscript.mjs hello.vds --target html --out dist`. Open `dist/index.html` in a browser.

This standalone repository currently contains the language website and docs. The eventual standalone CLI and package are not published.
