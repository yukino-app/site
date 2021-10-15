<script setup lang="ts">
export interface NavLinkItem {
    name: string;
    path: string;
    ext: boolean;
}

defineProps<{
    item: NavLinkItem;
    afterClick?: () => void;
}>();
</script>

<template>
    <a
        class="nav-link"
        :href="item.path"
        target="_blank"
        @click="afterClick"
        v-if="item.ext"
    >
        {{ item.name }}
    </a>

    <router-link
        class="nav-link"
        :to="item.path"
        active-class="active"
        @click="afterClick"
        v-else
    >
        {{ item.name }}
    </router-link>
</template>

<style scoped>
.nav-link {
    @apply text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-200;
}

.nav-link.active {
    @apply text-gray-900 dark:text-white font-bold lg:font-normal;
}
</style>
