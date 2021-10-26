import sanitize from "sanitize-html";
import marked from "marked";

export const CommitTypes = ["feat", "refactor", "fix", "perf"] as const;

export type ICommitType = typeof CommitTypes[number];

export interface Commit {
    type: ICommitType;
    cat?: string;
    msg: string;
    stats: {
        additions: number;
        deletions: number;
    };
    sha: string;
    url: string;
}

export class Changelogs {
    constructor(public readonly commits: Record<ICommitType, Commit[]>) {}

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
                const commits: Record<ICommitType, Commit[]> = {
                    feat: [],
                    fix: [],
                    refactor: [],
                    perf: [],
                };

                for (const x of CommitTypes) {
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
