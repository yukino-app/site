import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { redirects, toRouteRecordRaw } from "./redirects";

export const routes: {
    name?: string;
    route: RouteRecordRaw;
}[] = [
    {
        name: "Home",
        route: { path: "/", component: () => import("../pages/Home.vue") },
    },
    {
        name: "Download",
        route: {
            path: "/download",
            component: () => import("../pages/Download.vue"),
        },
    },
    ...redirects.map((x) => ({
        route: toRouteRecordRaw(...x),
    })),
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes.map((x) => x.route),
});
