# RegExp

## Objects

### `RegExp`

The regular expression.

| Property             | Signature                                                  | Description                                                                                                         |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `isCaseInsensitive`  | `Boolean`                                                  | Is case insensitive flag enabled?                                                                                   |
| `isDotAll`           | `Boolean`                                                  | Is dot-all flag enabled?                                                                                            |
| `isMultiline`        | `Boolean`                                                  | Is multiline flag enabled?                                                                                          |
| `isUnicode`          | `Boolean`                                                  | Is unicode flag enabled?                                                                                            |
| `pattern`            | `String`                                                   | Regular expression pattern.                                                                                         |
| `hasMatch`           | `(input: String) => Boolean`                               | Does `input` has matches against the pattern.                                                                       |
| `stringMatch`        | `(input: String) => String`                                | Returns the string match of `input` against the pattern.                                                            |
| `firstMatch`         | `(input: String) => RegExpMatch?`                          | Returns the match of `input` against the pattern.                                                                   |
| `allMatches`         | `(input: String) => List<RegExpMatch>`                     | Returns the all the matches of `input` against the pattern.                                                         |
| `replaceFirst`       | `(input: String, with: String) => String`                  | Returns a string after replacing first match of `input` against the pattern using `with`.                           |
| `replaceAll`         | `(input: String, with: String) => String`                  | Returns a string after replacing all the matches of `input` against the pattern using `with`.                       |
| `replaceFirstMapped` | `(input: String, with: (RegExpMatch) => String) => String` | Returns a string after replacing first match of `input` against the pattern using the value returned by `with`.     |
| `replaceAllMapped`   | `(input: String, with: (RegExpMatch) => String) => String` | Returns a string after replacing all the matches of `input` against the pattern using the value returned by `with`. |

### `RegExpMatch`

Contains information about a regular expression match.

| Property     | Signature                             | Description                              |
| ------------ | ------------------------------------- | ---------------------------------------- |
| `input`      | `String`                              | The input.                               |
| `groupCount` | `Number`                              | The number of groups.                    |
| `groupNames` | `List<String>`                        | The names of the groups.                 |
| `namedGroup` | `(groupName: String) => RegExpMatch?` | Returns the match using the `groupName`. |
| `group`      | `(index: Number) => RegExpMatch?`     | Returns the match at the `index`.        |

## `RegExp.new`

Takes in a value and returns the boolean equivalent.

```
RegExp.new(r"\w+");
# regexp of pattern \w+

RegExp.new("\\d+");
# regexp of pattern \d+
```
