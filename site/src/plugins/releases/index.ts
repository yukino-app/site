import { URLs } from "../constants";
import { Changelogs } from "./changelogs";
import {
    PlatformConfig,
    getCurrentPlatform,
    tryGetPlatformConfig,
} from "./platforms";

export interface IReleaseFile {
    name: string;
    format: string;
    size: number;
    url: string;
    icon: string;
}

export interface IReleasePlatform {
    name: string;
    icon: string;
    files: IReleaseFile[];
}

export interface IRelease {
    version: string;
    changelogs?: Changelogs;
    releaseURL: string;
    platforms: IReleasePlatform[];
}

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

    const config = tryGetPlatformConfig(pt);
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

export const getRelease = async (
    version: "latest" | string
): Promise<IRelease> => {
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

    const platforms: Record<string, IReleasePlatform> = {};
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

    const currentPlatform = getCurrentPlatform();
    return {
        version: body.tag_name,
        changelogs: Changelogs.tryParseFromBody(body.body),
        releaseURL: body.html_url,
        platforms: Object.values(platforms).sort((a, b) =>
            a.name === currentPlatform ? -1 : 0
        ),
    };
};
