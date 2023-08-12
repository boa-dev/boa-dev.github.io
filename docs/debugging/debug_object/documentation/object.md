---
sidebar_position: 3
---

# `$boa.object`

Contains utility functions for getting internal information about an object.

## Function `$boa.object.id(object)`

This function returns memory address of the given object, as a string.

Example:

```JavaScript
let o = { x: 10, y: 20 }
$boa.object.id(o)    // '0x7F5B3251B718'

// Geting the address of the $boa object in memory
$boa.object.id($boa) // '0x7F5B3251B5D8'
```
