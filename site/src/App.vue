<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
</script>

<template>
    <NavBar />

    <div class="pb-10">
        <router-view v-slot="{ Component }">
            <transition name="page" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
.page-enter-from {
    opacity: 0;
}

.page-enter-active {
    transform: translateY(-1rem);
    transition: 0.4s ease;
}

.page-enter-to {
    transform: translateY(0);
}

.page-leave-active {
    transition: 0.4s ease;
}

.page-leave-to {
    opacity: 0;
    transform: translateY(1rem);
}
</style>
