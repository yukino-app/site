# Advanced Usage

## Bulk Downloading

The `episodes` and `chapters` option supports multiple ranges. Supported formats are `all`, `x,y,z` (comma-seperated), `x..z`, `x...z` and `x-z`. Examples: `1,2,5`, `1-5`, `1..5`, `1...5`, `all`.

## Argument Variables

Options like `destination`, `filename` supports templates which will be replaced with actual values. For example, `${anime.name}` will be replaced with the actual anime name. List of all the available templates can be checked [here](https://github.com/yukino-org/yukimi/blob/fcfe761e4ea09646a2ddb0fb88ec31432e0a8f29/src/core/commander.dart#L49).

## JSON-mode

JSON mode can be used to obtain results in JSON format. Other applications can take advantage of this feature. This can be done using the global `json` flag.

```bash
yukimi tenka store --json
```
