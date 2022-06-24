# Basic Usage

## Accepting usage policy

You must agree to the usage policy to use the application. This can be done using the `agree-to-usage-policy` command.

```bash
yukimi agree-to-usage-policy
```

## Use Terminal Mode

Use the `terminal` command to open a nested terminal. It is way faster than traditionally invoking the executable multiple times. This can be done using `yukimi<path/to/executable> -t`.

Do:

```bash
yukimi -t
> help
> tenka installed
```

Don't:

```bash
yukimi help
yukimi tenka installed
```

## Modules

You must install modules to use the core commands within the application.

### Listing all modules

```
yukimi -t
> tenka store
```

### Installing a module

```
yukimi -t
> tenka install <module-name>
> tenka install hanime.tv readm.org
```

### Uninstalling a module

```
yukimi -t
> tenka uninstall <module-name>
> tenka uninstall hanime.tv
```

### Listing all installed modules

```
yukimi -t
> tenka installed
```

!!! note

    Extensions are auto-updated upon restarting the application.

## Anime

### Searching an anime

```
yukimi -t
> anime search <module-name> "<anime-name>"
> anime search hanime.tv "overflow season 1"
```

### Viewing an anime

```
yukimi -t
> anime info <module-name> "<anime-url>"
> anime info hanime.tv "https://hanime.tv/videos/hentai/overflow-season-1"
```

This lists all the information and episodes of the anime.

### Playing an anime

To play an anime, you must have `mpv` installed. The `PATH` environment variable should contain the path to `mpv` or it can be set in the application settings.

```
yukimi -t
> anime info hanime.tv "https://hanime.tv/videos/hentai/overflow-season-1" -e 1 -p
```

### Downloading an anime

```
yukimi -t
> anime info hanime.tv "https://hanime.tv/videos/hentai/overflow-season-1" -e 1 -d
```

Custom download path can be specified using the command options.

## Manga

### Searching a manga

```
yukimi -t
> manga search <module-name> "<manga-name>"
> manga search mangadex.org "mayo chiki"
```

### Viewing a manga

```
yukimi -t
> manga info <module-name> "<manga-url>"
> manga info mangadex.org "https://api.mangadex.org/manga/afa0770f-4648-4c12-94c6-78cb96da3cb3"
```

This lists all the information and episodes of the anime.

### Reading a manga

When viewing a manga, it is locally downloaded into a temporary folder before opened. So, it is better to use the `download` option instead of `read` option.

```
yukimi -t
> manga info mangadex.org "https://api.mangadex.org/manga/afa0770f-4648-4c12-94c6-78cb96da3cb3" -c 1 -r
```

### Downloading a manga

```
yukimi -t
> manga info mangadex.org "https://api.mangadex.org/manga/afa0770f-4648-4c12-94c6-78cb96da3cb3" -c 1 -d
```
