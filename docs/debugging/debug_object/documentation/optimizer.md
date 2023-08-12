---
sidebar_position: 4
---


# `$boa.optimizer`

This modules contains getters and setters for enabling and disabling optimizations.

## Getter & Setter `$boa.optimizer.constantFolding`

This is and accessor property on the module, its getter returns `true` if enabled or `false` otherwise.
Its setter can be used to enable/disable the constant folding optimization.

```JavaScript
$boa.optimizer.constantFolding = true
$boa.optimizer.constantFolding // true
```

## Getter & Setter `$boa.optimizer.statistics`

This is an accessor property on the module, its getter returns `true` if enabled or `false` otherwise.
Its setter can be used to enable/disable optimization statistics, which are printed to `stdout`.

```JavaScript
>> $boa.optimizer.constantFolding = true
>> $boa.optimizer.statistics = true
>> 1 + 1
Optimizer {
    constant folding: 1 run(s), 2 pass(es) (1 mutating, 1 checking)
}

2
>>
```
