---
sidebar_position: 5
---

# `$boa.realm`

This module contains realm utilities to test cross-realm behaviour.

## `$boa.realm.create`

Creates a new realm with a new set of builtins and returns its global object.

```javascript
let global = $boa.realm.create();

Object != global.Object; // true
```
