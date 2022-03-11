<script setup lang="ts">
import { IRouteInfo, Routes } from "../tools/router";

const routes: IRouteInfo[] = [Routes.home];
</script>

<template>
    <div>
        <div>
            <router-link :to="x.path" v-for="x in routes">{{
                x.name
            }}</router-link>
        </div>
    </div>
</template>
