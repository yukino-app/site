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

export interface GetLatestResult {
    version: string;
    platforms: DownloadPlatform[];
}

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
    const [, pt, format] = /- (.*?)\.(.*?)$/.exec(filename)!;
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

export const getLatest = async (): Promise<GetLatestResult> => {
    const latest: {
        tag_name: string;
        assets: {
            name: string;
            browser_download_url: string;
            size: number;
        }[];
    } = await fetch(URLs.releasesCdn).then((res) => res.json());

    const platforms: Record<string, DownloadPlatform> = {};
    for (const x of latest.assets) {
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

    return {
        version: latest.tag_name,
        platforms: Object.values(platforms),
    };
};
