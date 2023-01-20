# HTML

## Objects

### `HtmlElementInst`

Represents a HTML element.

| Property           | Signature                                     | Description                        |
| ------------------ | --------------------------------------------- | ---------------------------------- |
| `classes`          | `List<String>`                                | The element's class list.          |
| `id`               | `String`                                      | The element id.                    |
| `text`             | `String`                                      | The element text.                  |
| `innerHtml`        | `String`                                      | The element inner HTML.            |
| `outerHtml`        | `String`                                      | The element outer HTML.            |
| `attributes`       | `Object`                                      | The element's attributes.          |
| `querySelector`    | `(selector: String) => HtmlElementInst`       | Returns the selected element.      |
| `querySelectorAll` | `(selector: String) => List<HtmlElementInst>` | Returns all the selected elements. |

## `HtmlElement.parse`

Parses the HTML text.

```title="Signature"
(html: String) => HtmlElementInst
```
