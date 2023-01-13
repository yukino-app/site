# Data Types

Fubuki supports literals to represent values. All the data types exception `null` is an object. These literals are considered as expressions.

## Null

Represents a `null` value. Also can be called as `void` or nothing.

```title="Syntax"
null
```

## Number

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

## String

Represents a string value. Strings can be prefixed with `r` to parse them as they are. Strings are always multi-line.

```title="Syntax (RegExp)"
'[\S\s]*'
"[\S\s]*"
r'[\S\s]*'
r"[\S\s]*"
```

```title="Example"
'Hello'
"Hello"
r'This is a raw string'
r"This is a raw string"
'Supports escape sequences like \t \n'
"but also unicodes like \u0041 and \x41"

'Easy
and
peasy'
```

| Property             | Signature                                                 | Description                                                         |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| `isEmpty`            | `() => Boolean`                                           | Is string empty?                                                    |
| `isNotEmpty`         | `() => Boolean`                                           | Is string not empty?                                                |
| `length`             | `() => Number`                                            | Length of the string.                                               |
| `compareTo`          | `(other: String) => Number`                               | Compare to another string. Returns `0` if equal.                    |
| `contains`           | `(other: String) => Boolean`                              | Check if `other` is present in the string.                          |
| `startsWith`         | `(other: String) => Boolean`                              | Check if the string is prefixed with `other`.                       |
| `endsWith`           | `(other: String) => Boolean`                              | Check if the string is suffixed with `other`.                       |
| `indexOf`            | `(substring: String) => Number`                           | Position of `substring` in the string. Returns `-1` if not present. |
| `substring`          | `(start: Number, end: Number) => String`                  | Returns a substring between `start` and `end`.                      |
| `replaceFirst`       | `(pattern: String, with: String) => String`               | Replaces first `substring` with `with`.                             |
| `replaceAll`         | `(pattern: String, with: String) => String`               | Replaces all `substring` with `with`.                               |
| `replaceFirstMapped` | `(pattern: String, mapper: (String) => String) => String` | Replaces first `substring` with value returned by `with`.           |
| `replaceAllMapped`   | `(pattern: String, mapper: (String) => String) => String` | Replaces all `substring` with value returned by `with`.             |
| `trim`               | `() => String`                                            | Removes all whitespaces at the ends.                                |
| `trimLeft`           | `() => String`                                            | Removes all whitespaces at the start.                               |
| `trimRight`          | `() => String`                                            | Removes all whitespaces at the end.                                 |
| `padLeft`            | `(length: Number, with: String) => String`                | Pads using `with` at the start.                                     |
| `padRight`           | `(length: Number, with: String) => String`                | Pads using `with` at the end.                                       |
| `split`              | `(splitter: String) => List<String>`                      | Splits the string at `splitter`s.                                   |
| `codeUnitAt`         | `(index: Number) => String`                               | Returns code-unit at `index`.                                       |
| `toCodeUnits`        | `() => List<Number>`                                      | Returns code-units of the string.                                   |
| `toLowerCase`        | `() => String`                                            | Returns the string in lowercase.                                    |
| `toUpperCase`        | `() => String`                                            | Returns the string in uppercase.                                    |

## Boolean

Represents truthiness using `true` or `false`.

```title="Syntax"
true
false
```

!!! info

    Trailing commas are allowed in function parameters, function call, object key-value pairs, map key-value pairs and list values. For example, `list [1, 2, 3,]` is perfectly valid and same as `list [1, 2, 3]`.

## Function

Represents a callable object. Functions are prefixed with `fun` keyword. They are anonymous and cannot have a named unlike other programming languages. They are invoked using call operator. They can take in parameters and may return values.

```title="Syntax"
fun [([param1, param2, ..., paramN])] {
    statements
}
```

```title="Example"
fun { return 1; }
fun () { return 1; }

fun (a, b) {
    return a + b;
}
```

## Object

Represents a pair of keys and values. Objects are prefixed with `obj` keyword. Objects are not created from classes since classes do not even exist. The keys are parsed as identifiers and values are parsed as expressions. Any keys using surrounding brackets (`[]`) are parsed as expressions. They properties can be accessed using the get and set operators.

```title="Syntax"
obj {
    [property: expr,]
    ...
    [\[expr\]: expr,]
    ...
}
```

```title="Example"
obj {}

obj {
    hello1: "world1",
    ["hello2"]: "world2",
    [1]: "world3",
}
```

## Map

Represents a pair of keys and values. Maps are prefixed with `map` keyword. Maps differ only syntactically from objects. Keys are parsed as expressions and not as identifiers.

```title="Syntax"
map {
    [expr: expr,]
    ...
}
```

```title="Example"
map {}

map {
    "hello1": "world1",
    "hello2": "world2",
    1: "world3",
}
```

## List

Represents a list of values. Lists are prefixed with `list` keyword.

```title="Syntax"
list \[[expr1, expr2, ..., exprN]\]
```

```title="Example"
list []
list [1, 2, 3]
```

| Property        | Signature                                             | Description                                                       |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| `push`          | `(value: Any) => Null`                                | Adds `value` to the list.                                         |
| `pushAll`       | `(values: List<Any>) => Null`                         | Adds all values of `values` to the list.                          |
| `pop`           | `() => Null`                                          | Removes the last element.                                         |
| `clear`         | `() => Null`                                          | Removes all the elements.                                         |
| `length`        | `() => Number`                                        | Returns length of the list.                                       |
| `isEmpty`       | `() => Boolean`                                       | Is the list empty?                                                |
| `isNotEmpty`    | `() => Boolean`                                       | Is the list not empty?                                            |
| `clone`         | `() => List<Any>`                                     | Returns clone of the list.                                        |
| `reversed`      | `() => List<Any>`                                     | Returns reversed clone of the list.                               |
| `contains`      | `(element: Any) => Boolean`                           | Check if `element` is present in the list.                        |
| `indexOf`       | `(element: Any) => Boolean`                           | Returns the index of `element` in the list.                       |
| `lastIndexOf`   | `(element: Any) => Boolean`                           | Returns the last index of `element` in the list.                  |
| `remove`        | `(element: Any) => Boolean`                           | Removes all `element` from the list.                              |
| `sublist`       | `(start: Number, end: Number) => List<Any>`           | Returns a sub-list consisting elements between `start` and `end`. |
| `find`          | `(predicate: (element: Any) => Boolean) => Any`       | Returns the matched element using the `predicate`.                |
| `findIndex`     | `(predicate: (element: Any) => Boolean) => Number`    | Returns the index of matched element using the `predicate`.       |
| `findLastIndex` | `(predicate: (element: Any) => Boolean) => Number`    | Returns the last index of matched element using the `predicate`.  |
| `map`           | `(predicate: (element: Any) => Any) => List<Any>`     | Returns the list of mapped values using `predicate`.              |
| `filter`        | `(predicate: (element: Any) => Boolean) => List<Any>` | Returns the list of filtered values using `predicate`.            |
| `sort`          | `(sortBy: (a: Any, b: Any) => Number) => List<Any>`   | Returns the sorted list of using `sortBy`.                        |
| `flat`          | `(level: Number) => List<Any>`                        | Returns the flatted list of level `level`.                        |
| `flatDeep`      | `() => List<Any>`                                     | Returns the flatted list of level `this.length`.                  |
| `unique`        | `() => List<Any>`                                     | Returns the list of unique elements.                              |
| `forEach`       | `(predicate: (element: Any) => Null) => Null`         | Iterates the list using `predicate`.                              |

## Future

Represents a asynchronous value. Internally represented using Dart's `Future`. Futures are not directly creatable.

```title="Example"
someFutureValue.await();
someFutureValue.then(fun (x) { print x; });
someFutureValue.catchError(fun (err) { print err; });
```

| Property     | Signature                       | Description                                    |
| ------------ | ------------------------------- | ---------------------------------------------- |
| `await`      | `() => Any`                     | Returns the result.                            |
| `then`       | `((value: Any) => Any) => Null` | Calls the callback when the value is resolved. |
| `catchError` | `((value: Any) => Any) => Null` | Calls the callback when the future is failed.  |

!!! note

    Never leave instances of `Future`s unawaited. Unawaited futures are ignored by the virtual machine.
