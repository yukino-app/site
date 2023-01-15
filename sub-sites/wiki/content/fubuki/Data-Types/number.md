# Number

Represents a double-precision floating point value. Supports exponents (`XeY`) and hexadecimal (`0xAAAAAAAA`) values. `NaN` is used to denote a invalid number. Infinity, negative infinity and `NaN` can be created using native number helpers.

```title="Syntax (RegExp)"
-?\d+(\.\d+)?
-?\d+(\.\d+)?e(\+|-)?\d+
-?0[Xx][A-Fa-f]+
```

```title="Example"
0
-140
-9.2
100
250.67
10e2
10e-4
0xfff
```

| Property          | Signature                    | Description                                                               |
| ----------------- | ---------------------------- | ------------------------------------------------------------------------- |
| `sign`            | `() => Number`               | Returns the `-1` (less than zero), `0` (zero) or `1` (greater than zero). |
| `isFinite`        | `() => Boolean`              | Is the number finite?                                                     |
| `isInfinite`      | `() => Boolean`              | Is the number infinite?                                                   |
| `isNaN`           | `() => Boolean`              | Is the number `NaN`?                                                      |
| `isNegative`      | `() => Boolean`              | Is the number negative?                                                   |
| `abs`             | `() => Number`               | Returns the number without sign.                                          |
| `ceil`            | `() => Number`               | Returns the number rounded towards positive infinity.                     |
| `round`           | `() => Number`               | Returns the number rounded towards negative infinity.                     |
| `truncate`        | `() => Number`               | Returns the number discarding fractional digits.                          |
| `precisionString` | `(digits: Number) => String` | Returns the number string with specified precision.                       |
