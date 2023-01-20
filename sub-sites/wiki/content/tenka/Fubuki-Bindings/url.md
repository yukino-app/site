# URL

## Objects

### `Url`

Represents a http response.

| Property          | Signature      | Description                |
| ----------------- | -------------- | -------------------------- |
| `authority`       | `String`       | The authority.             |
| `fragment`        | `String`       | The fragment.              |
| `host`            | `String`       | The host.                  |
| `origin`          | `String`       | The origin.                |
| `path`            | `String`       | The path.                  |
| `port`            | `Number`       | The port.                  |
| `query`           | `String`       | The query.                 |
| `scheme`          | `String`       | The scheme.                |
| `hasAbsolutePath` | `String`       | Is it an absolute path ?   |
| `hasAuthority`    | `Boolean`      | Does it have an authority? |
| `hasEmptyPath`    | `Boolean`      | Does it have empty paths?  |
| `hasFragment`     | `Boolean`      | Does it have a fragment?   |
| `hasPort`         | `Boolean`      | Does it have a port?       |
| `hasQuery`        | `Boolean`      | Does it have a query?      |
| `hasScheme`       | `Boolean`      | Does it have a scheme?     |
| `isAbsolute`      | `Boolean`      | Is it an absolute path?    |
| `pathSegments`    | `List<String>` | The path segments.         |
| `queryParameters` | `Object`       | The query parameters.      |

## `Url.parse`

Parses an URL.

```title="Signature"
(url: String) => Url
```

## `Url.ensureHttpScheme`

Ensures `http://` scheme.

```title="Signature"
(url: String) => String
```

## `Url.ensureHttpsScheme`

Ensures `https://` scheme.

```title="Signature"
(url: String) => String
```

## `Url.ensure`

Ensures the url and transforms into a valid one.

```title="Signature"
(url: String) => String
```

## `Url.encodeComponent`

Encodes the component using percent-encoding (`%`).

```title="Signature"
(url: String) => String
```

## `Url.decodeComponent`

Decodes the component using percent-encoding (`%`).

```title="Signature"
(url: String) => String
```

## `Url.encodeQueryComponent`

Encodes the component using HTML 4.01 rules.

```title="Signature"
(url: String) => String
```

## `Url.decodeQueryComponent`

Decodes the component using HTML 4.01 rules.

```title="Signature"
(url: String) => String
```

## `Url.splitQueryString`

Decodes the query string.

```title="Signature"
(queries: String) => Object
```

## `Url.joinQueryString`

Encodes the query string.

```title="Signature"
(queries: Object) => String
```
