# List

Represents a list of values.

```title="Syntax"
\[[expr1, expr2, ..., exprN]\]
```

```title="Example"
[]
[1, 2, 3]
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
