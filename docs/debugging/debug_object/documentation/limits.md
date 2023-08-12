---
sidebar_position: 7
---

# `$boa.limits`

This module contains utilities for changing runtime limits.

## Getter & Setter `$boa.limits.loop`

This is an accessor property on the module, its getter returns the loop iteration limit before an error is thrown.
Its setter can be used to set the loop iteration limit.

```javascript
$boa.limits.loop = 10;

while (true) {} // RuntimeLimit: Maximum loop iteration limit 10 exceeded
```

## Getter & Setter `$boa.limits.recursion`

This is an accessor property on the module, its getter returns the recursion limit before an error is thrown.
Its setter can be used to set the recursion limit.

```javascript
$boa.limits.recursion = 100;

function x() {
  return x();
}
x(); // RuntimeLimit: Maximum recursion limit 100 exceeded
```