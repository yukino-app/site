<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="text-center">
        <h1 class="font-bold text-3xl">{{ title }}</h1>
    </div>
</template>
