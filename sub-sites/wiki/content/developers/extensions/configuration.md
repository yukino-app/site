# Configuration

## Properties

| Property        | Type      | Description                                                                        |
| --------------- | --------- | ---------------------------------------------------------------------------------- |
| `name`          | `string`  | Name of the extension.                                                             |
| `author`        | `string`  | Author's name.                                                                     |
| `repo`          | `object`  | Repository details.                                                                |
| `repo.username` | `string`  | Repository owner/username.                                                         |
| `repo.repo`     | `string`  | Repository name.                                                                   |
| `repo.sha`      | `string`  | SHA of the commit.                                                                 |
| `path`          | `object`  | File paths.                                                                        |
| `path.source`   | `string`  | Source file (path of the `.ht` file).                                              |
| `path.image`    | `string`  | Image file (path of a `.png`, `.jpg` file). Must be of 96x96 resolution.           |
| `nsfw`          | `boolean` | Whether the extensions contains nsfw.                                              |
| `defaultLocale` | `string`  | Locale code with format `<language code>_<country code>` (example: `en`, `pt_br`). |

## Example

[View on GitHub](https://github.com/yukino-org/extensions-store/blob/main/extensions/anime/gogoanime_pe.yml)

<pre>
<code id="example-file"></code>
</pre>

<script>
    fetch("https://api.github.com/repos/yukino-org/extensions-store/contents/extensions/anime/gogoanime_pe.yml").then(res => res.json()).then(res => {
        const content = atob(res.content);
        document.getElementById("example-file").innerText = content;
    });
</script>
