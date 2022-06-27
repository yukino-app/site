# Advanced Usage

## Bulk Downloading

The `episodes` and `chapters` option supports selection in bulk.

Allowed Formats:

-   `x,y,z` - Multiple values which are comma-seperated.
-   `x..y` or `x...y` - From-to range.
-   `x+y`, `x-y` - Mathematical operation.

Available Variables:

-   `first` - First episode number.
-   `last` - Last episode number.

Valid Examples:

-   `1,2,3` - Selects episode 1, 2 and 3.
-   `1..3` or `1...3` - Selects 1, 2 and 3.
-   `first..last` or `first...last` - Selects all the episodes.
-   `first..first+2` - Selects first 2 episodes.
-   `last-2..last` - Selects last 2 episodes.

## Argument Variables

Options like `destination`, `filename` supports templates which will be replaced with actual values. For example, `${anime.name}` will be replaced with the actual anime name. List of all the available templates can be checked [here](https://github.com/yukino-org/yukimi/blob/fcfe761e4ea09646a2ddb0fb88ec31432e0a8f29/src/core/commander.dart#L49).

## JSON-mode

JSON mode can be used to obtain results in JSON format. Other applications can take advantage of this feature. This can be done using the global `json` flag.

```bash
yukimi tenka store --json
```
