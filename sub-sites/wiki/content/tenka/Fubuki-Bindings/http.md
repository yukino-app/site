# Http

## Objects

### `HttpResponse`

Represents a http response.

| Property       | Signature | Description                 |
| -------------- | --------- | --------------------------- |
| `body`         | `String`  | The response body.          |
| `headers`      | `Object`  | The response headers.       |
| `statusCode`   | `String`  | The response status code.   |
| `reasonPhrase` | `String`  | The response reason phrase. |
| `isRedirect`   | `Boolean` | Is it a redirect?           |

## `Http.request`

Fetches a URL and returns the result.

```title="Signature"
(options: {
    method: "get" | "post" | "head" | "patch" | "delete" | "put",
    url: String,
    body: String?,
    headers: Object,
}) => HttpResponse
```

## `Http.defaultDesktopUserAgent`

Returns the platform's web user-agent.

```title="Signature"
() => String
```
