---
sidebar_position: 6
---

# `$boa.shape`

This module contains helpful functions for getting information about a shape of an object.

## Function `$boa.shape.id(object)`

Returns the pointer of the object's shape in memory as a string encoded in hexadecimal format.

```JavaScript
$boa.shape.id(Number) // '0x7FC35A073868'
$boa.shape.id({}) // '0x7FC35A046258'
```

## Function `$boa.shape.type(object)`

Returns the object's shape type.

```JavaScript
$boa.shape.type({x: 3}) // 'shared'
$boa.shape.type(Number) // 'unique'
```

## Function `$boa.shape.same(o1, o2)`

Returns `true` if both objects have the same shape.

```JavaScript
// The values of the properties are not important!
let o1 = { x: 10 }
let o2 = {}
$boa.shape.same(o1, o2) // false

o2.x = 20
$boa.shape.same(o1, o2) // true

o2.y = 200
$boa.shape.same(o1, o2) // false
```
