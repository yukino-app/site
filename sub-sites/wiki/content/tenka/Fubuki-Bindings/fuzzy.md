# Fuzzy Search

## Objects

### `FuzzySearchClient`

Represents the fuzzy search client.

| Property | Signature                              | Description                 |
| -------- | -------------------------------------- | --------------------------- |
| `search` | `(terms: String) => List<FuzzyResult>` | Returns the search results. |

### `FuzzyResult`

Represents the result of fuzzy search.

| Property | Signature | Description  |
| -------- | --------- | ------------ |
| `match`  | `Number`  | Match ratio. |
| `item`   | `Any`     | The item.    |

## `FuzzySearch.new`

Digest as `md5`.

```title="Signature"
({
    items: List<Any>,
    keys: List<{
        getter: (item: Any) => Any,
        weight: Number,
    }>,
}) => FuzzySearchClient
```
