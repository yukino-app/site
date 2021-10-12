<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import { GetLatestResult, getLatest } from "../plugins/downloads";

const downloads = ref<GetLatestResult | null>(null);

onMounted(async () => {
    downloads.value = await getLatest();
});
</script>

<template>
    <div class="wx wy">
        <Header title="Download" />

        <p class="mt-4 text-center text-sm text-gray-500" v-if="!downloads">
            Loading...
        </p>
        <div class="mt-10 grid grid-cols-2 gap-8" v-else>
            <div
                class="
                    bg-gradient-to-br
                    from-indigo-500
                    via-purple-500
                    to-purple-500
                    text-white
                    px-6
                    py-4
                    rounded-md
                    text-center
                "
                v-for="x in downloads.platforms"
            >
                <div class="flex justify-center items-center gap-6">
                    <p class="text-3xl"><Icon :icon="['fab', x.icon]" /></p>
                    <p class="text-2xl font-bold">{{ x.name }}</p>
                </div>

                <div class="mt-4 flex justify-center items-center gap-3">
                    <button
                        class="
                            transition
                            duration-200
                            hover:-translate-y-1
                            bg-white
                            px-3
                            py-1
                            rounded
                            text-indigo-500
                            flex
                            justify-center
                            items-center
                            gap-3
                        "
                        @click="() => (location.href = y.url)"
                        v-for="y in x.files"
                    >
                        <div class="text-xl">
                            <Icon :icon="y.icon" />
                        </div>
                        <div>
                            <p class="text-sm">
                                {{ y.name }}
                                <span class="text-xs">({{ y.format }})</span>
                            </p>
                            <p class="text-xs">
                                {{ (y.size / 1024).toFixed(1) }} MB
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
