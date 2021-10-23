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

    static tryParse(json?: string) {
        try {
            if (json) {
                const parsed = JSON.parse(json);
                return new Changelogs(parsed.commits);
            }
        } catch (_) {}
    }
}

export interface GetLatestResult {
    version: string;
    changelogs?: Changelogs;
    releaseURL: string;
    platforms: DownloadPlatform[];
}

const _platforms = {
    Android: "Android",
    "like Mac": "iOS",
    Win: "Windows",
    Mac: "MacOS",
    Linux: "Linux",
};

const getPlatform = () => {
    for (const [k, v] of Object.entries(_platforms)) {
        if (navigator.userAgent.includes(k)) {
            return v;
        }
    }
};

const getMeta = (
    filename: string
): {
    name: string;
    platform: {
        name: string;
        icon: string;
    };
    format: string;
    icon: string;
} => {
    const [pt, format] = filename.split("-").splice(-1)[0].split(".");
    let name: string,
        icon: string,
        platformName: string,
        platformIcon: string = pt;

    switch (format) {
        case "zip":
            name = "Archive";
            icon = "archive";
            break;

        default:
            name = "Setup";
            icon = "box-open";
            break;
    }

    switch (pt) {
        case "windows":
            platformName = "Windows";
            break;

        case "linux":
            platformName = "Linux";
            break;

        case "android":
            platformName = "Android";
            break;

        case "macos":
            platformName = "MacOS";
            platformIcon = "apple";
            break;

        case "ios":
            platformName = "iOS";
            platformIcon = "apple";
            break;

        default:
            throw new Error("Unknown Platform");
    }

    return {
        name,
        platform: {
            name: platformName,
            icon: platformIcon,
        },
        format,
        icon,
    };
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

    const currentPlatform = getPlatform();
    const changelogsJson = body.body.match(/<!-- changelogs: ({.*}) -->/)?.[1];
    return {
        version: body.tag_name,
        changelogs: Changelogs.tryParse(changelogsJson),
        releaseURL: body.html_url,
        platforms: Object.values(platforms).sort((a, b) =>
            a.name === currentPlatform ? -1 : 0
        ),
    };
};
