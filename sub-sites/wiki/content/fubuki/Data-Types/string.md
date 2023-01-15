# String

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

| Property             | Signature                                                 | Description                                                                                                                                                        |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isEmpty`            | `() => Boolean`                                           | Is string empty?                                                                                                                                                   |
| `isNotEmpty`         | `() => Boolean`                                           | Is string not empty?                                                                                                                                               |
| `length`             | `() => Number`                                            | Length of the string.                                                                                                                                              |
| `compareTo`          | `(other: String) => Number`                               | Compare to another string. Returns `0` if equal.                                                                                                                   |
| `contains`           | `(other: String) => Boolean`                              | Check if `other` is present in the string.                                                                                                                         |
| `startsWith`         | `(other: String) => Boolean`                              | Check if the string is prefixed with `other`.                                                                                                                      |
| `endsWith`           | `(other: String) => Boolean`                              | Check if the string is suffixed with `other`.                                                                                                                      |
| `indexOf`            | `(substring: String) => Number`                           | Position of `substring` in the string. Returns `-1` if not present.                                                                                                |
| `substring`          | `(start: Number, end: Number) => String`                  | Returns a substring between `start` and `end`.                                                                                                                     |
| `replaceFirst`       | `(pattern: String, with: String) => String`               | Replaces first `substring` with `with`.                                                                                                                            |
| `replaceAll`         | `(pattern: String, with: String) => String`               | Replaces all `substring` with `with`.                                                                                                                              |
| `replaceFirstMapped` | `(pattern: String, mapper: (String) => String) => String` | Replaces first `substring` with value returned by `with`.                                                                                                          |
| `replaceAllMapped`   | `(pattern: String, mapper: (String) => String) => String` | Replaces all `substring` with value returned by `with`.                                                                                                            |
| `trim`               | `() => String`                                            | Removes all whitespaces at the ends.                                                                                                                               |
| `trimLeft`           | `() => String`                                            | Removes all whitespaces at the start.                                                                                                                              |
| `trimRight`          | `() => String`                                            | Removes all whitespaces at the end.                                                                                                                                |
| `padLeft`            | `(length: Number, with: String) => String`                | Pads using `with` at the start.                                                                                                                                    |
| `padRight`           | `(length: Number, with: String) => String`                | Pads using `with` at the end.                                                                                                                                      |
| `split`              | `(splitter: String) => List<String>`                      | Splits the string at `splitter`s.                                                                                                                                  |
| `codeUnitAt`         | `(index: Number) => String`                               | Returns code-unit at `index`.                                                                                                                                      |
| `toCodeUnits`        | `() => List<Number>`                                      | Returns code-units of the string.                                                                                                                                  |
| `toLowerCase`        | `() => String`                                            | Returns the string in lowercase.                                                                                                                                   |
| `toUpperCase`        | `() => String`                                            | Returns the string in uppercase.                                                                                                                                   |
| `format`             | `(env: Object \| List<Any>) => String`                    | Returns the formatted string. Example: `"{} {1}".format(["Hello", "World"])`, `"{hello} {world}".format({ hello: "Hello", world: "World" })` returns `Hello World` |
