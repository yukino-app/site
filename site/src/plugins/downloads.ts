import marked from "marked";
import sanitize from "sanitize-html";
import { URLs } from "./constants";

export interface DownloadFile {
    name: string;
    format: string;
    size: number;
    url: string;
    icon: string;
}

export interface DownloadPlatform {
    name: string;
    icon: string;
    files: DownloadFile[];
}

export interface Commit {
    type: "feat" | "refactor" | "fix" | "perf";
    cat?: string;
    msg: string;
    stats: {
        additions: number;
        deletions: number;
    };
    sha: string;
    url: string;
}

export type Commits = {
    [k in Commit["type"]]: { commit: Commit }[];
};

export class Changelogs {
    constructor(public readonly commits: Commits) {}

    static styles: Record<
        Commit["type"],
        {
            title: string;
            color: string;
        }
    > = {
        feat: {
            title: "Features",
            color: "bg-green-500",
        },
        refactor: {
            title: "Changes",
            color: "bg-yellow-500",
        },
        fix: {
            title: "Bug Fixes",
            color: "bg-red-500",
        },
        perf: {
            title: "Improvements",
            color: "bg-purple-400",
        },
    };

    static tryParseFromBody(body: string) {
        try {
            if (body.includes("<!-- generated -->")) {
                const commits: Commits = {
                    feat: [],
                    fix: [],
                    refactor: [],
                    perf: [],
                };

                for (const x of Object.keys(commits) as (keyof Commits)[]) {
                    for (const y of body.matchAll(
                        RegExp(
                            `<!-- {${x}} -->([\\S\\s]+)<!-- {/${x}} -->`,
                            "g"
                        )
                    )) {
                        if (y[1]) {
                            for (const z of y[1].matchAll(
                                /- \[`([\w]{6})`\]\(([^)]+)\) (\*\*([^*]+)\*\*:)?(.*)/g
                            )) {
                                commits[x].push({
                                    commit: {
                                        sha: z[1].trim(),
                                        url: z[2].trim(),
                                        type: x,
                                        cat: z[4]?.trim(),
                                        msg: sanitize(
                                            marked.parseInline(z[5].trim())
                                        ),
                                        stats: {
                                            additions: 0,
                                            deletions: 0,
                                        },
                                    },
                                });
                            }
                        }
                    }
                }

                return new Changelogs(commits);
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export interface GetLatestResult {
    version: string;
    changelogs?: Changelogs;
    releaseURL: string;
    platforms: DownloadPlatform[];
}

const platforms: Record<
    string,
    {
        name: string;
        icon: string;
        userAgent: string;
        formats: {
            name: string;
            ext: string;
            icon: string;
        }[];
    }
> = {
    android: {
        name: "Android",
        icon: "android",
        userAgent: "Android",
        formats: [
            {
                name: "Apk",
                ext: "apk",
                icon: "box-open",
            },
        ],
    },
    windows: {
        name: "Windows",
        icon: "windows",
        userAgent: "Win",
        formats: [
            {
                name: "Installer",
                ext: "exe",
                icon: "box-open",
            },
            {
                name: "Archive",
                ext: "zip",
                icon: "archive",
            },
        ],
    },
    linux: {
        name: "Linux",
        icon: "linux",
        userAgent: "Linux",
        formats: [
            {
                name: "AppImage",
                ext: "AppImage",
                icon: "box-open",
            },
        ],
    },
};

const getMeta = (
    filename: string
):
    | {
          name: string;
          platform: {
              name: string;
              icon: string;
          };
          format: string;
          icon: string;
      }
    | undefined => {
    const [pt, format] = filename.split("-").splice(-1)[0].split(".");

    const config = platforms[pt];
    const ext = config?.formats.find((x) => x.ext === format);

    if (config && ext) {
        return {
            name: ext.name,
            platform: {
                name: config.name,
                icon: config.icon,
            },
            format: ext.ext,
            icon: ext.icon,
        };
    }
};

const getPlatform = () => {
    for (const x of Object.values(platforms)) {
        if (navigator.userAgent.includes(x.userAgent)) {
            return x.name;
        }
    }
};

export const getDownloads = async (
    version: "latest" | string
): Promise<GetLatestResult> => {
    let route;
    switch (version) {
        case "latest":
            route = "latest";
            break;

        default:
            route = `tags/${version}`;
            break;
    }

    const res = await fetch(`${URLs.releasesCdn}/${route}`);
    if (res.status != 200) {
        throw new Error(
            `Failed with status code ${res.status}${
                res.statusText.length ? ` (${res.statusText})` : ""
            }`
        );
    }

    const body: {
        tag_name: string;
        body: string;
        html_url: string;
        assets: {
            name: string;
            browser_download_url: string;
            size: number;
        }[];
    } = await res.json();

    const platforms: Record<string, DownloadPlatform> = {};
    for (const x of body.assets) {
        const meta = getMeta(x.name);

        if (meta) {
            if (!platforms[meta.platform.name]) {
                platforms[meta.platform.name] = {
                    name: meta.platform.name,
                    icon: meta.platform.icon,
                    files: [],
                };
            }

            platforms[meta.platform.name].files.push({
                name: meta.name,
                format: meta.format,
                size: x.size,
                url: x.browser_download_url,
                icon: meta.icon,
            });
        }
    }

    const currentPlatform = getPlatform();
    return {
        version: body.tag_name,
        changelogs: Changelogs.tryParseFromBody(body.body),
        releaseURL: body.html_url,
        platforms: Object.values(platforms).sort((a, b) =>
            a.name === currentPlatform ? -1 : 0
        ),
    };
};
