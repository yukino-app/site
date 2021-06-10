<template>
    <div
        class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 md:block"
        id="nav"
    >
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
            <div
                class="
                    flex flex-row
                    justify-between
                    items-center
                    gap-2
                    flex-wrap
                    w-full
                    md:w-auto
                "
            >
                <div class="px-2 md:px-0">
                    <img class="w-10" src="/icon.png" alt="Logo" />
                </div>

                <button
                    class="
                        block
                        md:hidden
                        cursor-pointer
                        focus:outline-none
                        px-2
                    "
                    @click.prevent.stop="openNavItems()"
                >
                    <Icon icon="times" v-if="showNavItems" />
                    <Icon icon="bars" v-else />
                </button>
            </div>

            <div
                :class="[
                    showNavItems ? 'flex' : 'hidden',
                    'flex-row',
                    'justify-center',
                    'items-center',
                    'gap-2',
                    'flex-wrap',
                    'md:flex',
                ]"
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
                        bg-yellow-500
                        hover:bg-yellow-600
                        text-white
                        px-4
                        py-1.5
                        rounded
                        transition
                        duration-200
                    "
                    :href="guidesUrl"
                    target="_blank"
                    ><span class="mr-1"><Icon icon="book-open" /></span>
                    Guide</a
                >

                <a
                    class="
                        bg-orange-600
                        hover:bg-orange-700
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

                <a
                    class="
                        bg-blue-700
                        hover:bg-blue-800
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        shadow-lg
                        transition
                        duration-300
                    "
                    :href="discordInvite"
                    target="_blank"
                    ><span class="mr-1"
                        ><Icon :icon="['fab', 'discord']"
                    /></span>
                    Discord</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { constants, scrollToDownloads } from "../util";

export default defineComponent({
    data() {
        const data: {
            guidesUrl: string;
            discordInvite: string;
            showNavItems: boolean;
        } = {
            guidesUrl: constants.urls.guides,
            discordInvite: constants.urls.discord,
            showNavItems: false,
        };

        return data;
    },
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
        openNavItems() {
            this.showNavItems = !this.showNavItems;
            console.log(this.showNavItems);
        },
        scrollToDownloads,
    },
});
</script>

<style scoped>
#nav {
    transform: translateY(-30rem);

    @apply transition duration-300 ease-in-out;
}

#nav.active {
    transform: translateY(0);
}
</style>
