<script setup lang="ts">
const features: {
    icon: string;
    text: string;
    desc: string;
}[] = [
    {
        icon: "puzzle-piece",
        text: "Extensions based",
        desc: "Handful of extensions to pick and use from.",
    },
    {
        icon: "compact-disc",
        text: "Ad-free",
        desc: "Never see those annoying ads ever again.",
    },
    {
        icon: "heart",
        text: "Open Source",
        desc: "Source code available publicly, licensed under GPL-3.0.",
    },
    {
        icon: "list",
        text: "Sync",
        desc: "Track your progress in MyAnimeList and AniList while you enjoy the show.",
    },
    {
        icon: "paint-brush",
        text: "User Interface",
        desc: "Simple and consistent user experience across the app with multiple themes.",
    },
];
</script>

<template>
    <div>
        <div class="relative h-[52rem] md:h-[40rem] lg:h-[50rem]">
            <div
                class="
                    absolute
                    top-0
                    h-[20rem]
                    lg:h-[25rem]
                    bg-gradient-to-br
                    from-indigo-500
                    via-purple-500
                    to-purple-500
                    flex flex-col
                    justify-center
                    items-center
                    w-full
                "
            >
                <div
                    class="text-center pb-[3rem] md:pb-[4rem] lg:pb-[8rem] mx-8"
                >
                    <p class="text-5xl md:text-5xl font-bold text-white">
                        Yukino
                    </p>
                    <p class="mt-4 text-white italic">
                        An extension based <b>Anime</b> & <b>Manga</b> client.
                    </p>

                    <div class="mt-6">
                        <router-link
                            class="
                                backdrop-filter backdrop-blur-lg
                                bg-white/25
                                hover:bg-white/30 hover:shadow
                                rounded
                                hover:-translate-y-1
                                transition
                                duration-200
                                text-white
                                dark:text-white
                                hover:text-white
                                dark:hover:text-white
                                px-3
                                py-1
                                inline-block
                            "
                            to="/download"
                        >
                            <Icon class="mr-1 text-sm" icon="download" />
                            Get Yukino
                        </router-link>
                    </div>
                </div>
            </div>

            <div
                class="
                    absolute
                    bottom-0
                    flex
                    justify-center
                    items-center
                    w-full
                "
            >
                <img
                    class="block md:hidden h-[36rem]"
                    src="../assets/screenshots/android_home_hero.png"
                    alt="Yukino App"
                />
                <img
                    class="rounded-md hidden md:block h-[25rem] lg:h-[33rem]"
                    src="../assets/screenshots/windows_home_hero.png"
                    alt="Yukino App"
                />
            </div>
        </div>

        <div class="wx wy">
            <hr />

            <p class="text-3xl font-bold text-center my-10">Features</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div class="text-center" v-for="x in features">
                    <Icon class="text-indigo-500 text-4xl" :icon="x.icon" />
                    <p class="mt-3 font-bold text-lg">{{ x.text }}</p>
                    <p class="mt-3 text-gray-500">{{ x.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
