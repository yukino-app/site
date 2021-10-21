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
        route: {
            path: "/download",
            redirect: "/download/latest",
        },
    },
    {
        route: {
            path: "/download/:version",
            component: () => import("../pages/Download.vue"),
        },
    },
    ...redirects.map((x) => ({
        route: toRouteRecordRaw(...x),
    })),
    {
        route: {
            path: "/:pathMatch(.*)*",
            component: () => import("../pages/404.vue"),
        },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes.map((x) => x.route),
});
