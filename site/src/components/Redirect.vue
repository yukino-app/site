<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{
    redirect: string;
}>();

const { redirect } = toRefs(props);

location.replace(redirect.value);
</script>

<template>
    <div class="wx wy">
        <p class="text-center">Redirecting you to the right place...</p>
    </div>
</template>
