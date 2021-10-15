import { RouteRecordRaw } from "vue-router";
import { URLs } from "./constants";

export const redirects: [string, string][] = [["/discord", URLs.discord]];

export const toRouteRecordRaw = (route: string, url: string) => {
    const record: RouteRecordRaw = {
        path: route,
        component: () => import("../components/Redirect.vue"),
        props: {
            redirect: url,
        },
    };

    return record;
};
