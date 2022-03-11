import { createRouter, createWebHistory } from "vue-router";

export interface IRouteInfo {
    name: string;
    path: string;
}

export const r = (i: IRouteInfo) => i;

export const Routes = {
    home: r({
        name: "Home",
        path: "/",
    }),
};

export const RouteNames = {};

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: Routes.home.path,
            component: () => import("../views/Home.vue"),
        },
    ],
});
