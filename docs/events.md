---
title: Events and interactions
sidebar_position: 6
---
# Events

Buttons can have aliases and click handlers:

```text
Page "Demo".
    Button "Try" as "start".
    When Click "start".
        Show "Hello!".
        Set Text of "start" to "Done".
```

The compiler generates basic browser handlers. This is not a general asynchronous event system.
