# Module Structure

The fubuki script must contain a variable `extractor` that is either a `AnimeExtractor` or `MangaExtractor` in its entrypoint file.

## Objects

### `AnimeExtractor`

```title="Signature"
{
    defaultLocale: String,
    search: (terms: String, locale: String) => List<SearchInfo>,
    getInfo: (url: String, locale: String) => AnimeInfo,
    getSources: (url: String, locale: String) => List<EpisodeSource>,
}
```

### `MangaExtractor`

```title="Signature"
{
    defaultLocale: String,
    search: (terms: String, locale: String) => List<SearchInfo>,
    getInfo: (url: String, locale: String) => MangaInfo,
    getChapter: (url: String, locale: String) => List<PageInfo>,
    getPage: (url: String, locale: String) => ImageDescriber,
}
```

### `SearchInfo`

```title="Signature"
{
    title: String,
    url: String,
    locale: String,
    thumbnail: ImageDescriber?,
}
```

### `AnimeInfo`

```title="Signature"
{
    title: String,
    url: String,
    episodes: List<EpisodeInfo>,
    locale: String,
    availableLocales: String,
    thumbnail: ImageDescriber?,
}
```

### `MangaInfo`

```title="Signature"
{
    title: String,
    url: String,
    chapters: List<ChapterInfo>,
    locale: String,
    availableLocales: String,
    thumbnail: ImageDescriber?,
}
```

### `EpisodeInfo`

```title="Signature"
{
    chapter: String,
    url: String,
    locale: String,
}
```

### `EpisodeSource`

```title="Signature"
{
    url: String,
    quality: "144p" | "360p" | "480p" | "720p" | "1080p"
        | "144" | "360" | "480" | "720" | "1080" | "unknown"
        | "sd" | "hd" | "fhd" | "?",
    headers: Object,
    locale: String,
}
```

### `ChapterInfo`

```title="Signature"
{
    chapter: String,
    url: String,
    locale: String,
    title: String?,
    volume: String?,
}
```

### `PageInfo`

```title="Signature"
{
    url: String,
    locale: String,
}
```

### `ImageDescriber`

```title="Signature"
{
    url: String,
    headers: Object,
}
```
