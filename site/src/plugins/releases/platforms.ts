export const SupportedPlatforms = ["android", "windows", "linux"] as const;

export type ISupportedPlatforms = typeof SupportedPlatforms[number];

export interface IPlatformConfig {
    name: string;
    icon: string;
    userAgent: string;
    formats: {
        name: string;
        ext: string;
        icon: string;
    }[];
}

export const PlatformConfig: Record<ISupportedPlatforms, IPlatformConfig> = {
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

export const tryGetPlatformConfig = (platform: string) => {
    return PlatformConfig[platform as ISupportedPlatforms] as
        | IPlatformConfig
        | undefined;
};

export const getCurrentPlatform = () => {
    for (const x of Object.values(PlatformConfig)) {
        if (navigator.userAgent.includes(x.userAgent)) {
            return x.name;
        }
    }
};
