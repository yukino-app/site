<template>
    <div class="fixed top-0 left-0 right-0 bg-white shadow-md z-50" id="nav">
        <div
            class="
                flex flex-col
                md:flex-row
                justify-around
                items-center
                gap-4
                px-5
                py-3
            "
        >
            <div>
                <img class="w-10" src="/icon.png" alt="Logo" />
            </div>
            <div
                class="
                    flex flex-row
                    justify-center
                    items-center
                    gap-2
                    flex-wrap
                "
            >
                <button
                    class="
                        focus:outline-none
                        bg-indigo-500
                        hover:bg-indigo-600
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    @click.prevent="scrollToDownloads()"
                >
                    <Icon class="mr-1" icon="save" /> Download
                </button>

                <a
                    class="
                        bg-black
                        hover:bg-gray-800
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    href="https://github.com/zyrouge/yukino-app/"
                    target="_blank"
                    ><span class="mr-1"
                        ><Icon :icon="['fab', 'github']"
                    /></span>
                    GitHub</a
                >

                <a
                    class="
                        bg-orange-500
                        hover:bg-orange-600
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    href="https://patreon.com/zyrouge"
                    target="_blank"
                    ><span class="mr-1"
                        ><Icon :icon="['fab', 'patreon']"
                    /></span>
                    Patreon</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { scrollToDownloads } from "../util";

export default defineComponent({
    mounted() {
        document.addEventListener("scroll", () => {
            const ele = document.getElementById("nav");

            if (
                document.body.scrollTop > 600 ||
                document.documentElement.scrollTop > 600
            ) {
                ele?.classList.add("active");
            } else {
                ele?.classList.remove("active");
            }
        });
    },
    methods: {
        scrollToDownloads,
    },
});
</script>

<style scoped>
#nav {
    transform: translateY(-200px);

    @apply transition duration-200;
}

#nav.active {
    transform: translateY(0);
}
</style>
