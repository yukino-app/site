<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";
import { GetLatestResult, getDownloads } from "../plugins/downloads";

const route = useRoute();
const router = useRouter();

const downloads = ref<GetLatestResult | null>(null);
const error = ref<string | undefined>();

onMounted(async () => {
    const version = route.params.version;
    if (typeof version !== "string") {
        error.value = "Unknown version";
        return;
    }

    try {
        downloads.value = await getDownloads(route.params.version as string);
        await router.replace(`/download/${downloads.value.version}/`);
    } catch (err) {
        error.value = `Something went wrong: ${err}`;
    }
});
</script>

<template>
    <div class="wx wy">
        <Header title="Download" />
        <p
            class="text-center text-sm text-gray-700 text-gray-400"
            v-if="downloads"
        >
            {{ downloads.version }}
        </p>

        <p class="mt-4 text-center text-sm text-red-500" v-if="error">
            {{ error }}
        </p>
        <p
            class="mt-4 text-center text-sm text-gray-500"
            v-else-if="!downloads"
        >
            Loading...
        </p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8" v-else>
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

                <div
                    class="
                        mt-4
                        flex flex-col
                        md:flex-row
                        justify-center
                        items-center
                        gap-3
                    "
                >
                    <a
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
                        :href="y.url"
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
                                {{ (y.size / 1024 / 1024).toFixed(1) }} MB
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
