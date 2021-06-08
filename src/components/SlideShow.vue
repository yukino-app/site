<template>
    <div class="flex flex-row justify-center items-center gap-6 relative">
        <button
            class="
                focus:outline-none
                text-3xl
                md:text-5xl
                opacity-50
                hover:opacity-100
                transition
                duration-200
                absolute
                md:block
                left-0
                bg-gray-100 bg-opacity-75
                md:bg-opacity-0
                pl-2
                pr-3
                py-2
                rounded-r
            "
            @click.prevent="changeIndex(-1)"
        >
            <Icon icon="chevron-left" />
        </button>
        <img
            :class="[
                'flex-none',
                i !== currentIndex && 'hidden',
                ...imgClassNames,
            ]"
            :src="img"
            :alt="`Image ${i + 1}`"
            v-for="(img, i) in images"
        />
        <button
            class="
                focus:outline-none
                text-3xl
                md:text-5xl
                opacity-50
                hover:opacity-100
                transition
                duration-200
                absolute
                md:block
                right-0
                bg-gray-100 bg-opacity-75
                md:bg-opacity-0
                pl-3
                pr-2
                py-2
                rounded-l
            "
            @click.prevent="changeIndex(1)"
        >
            <Icon icon="chevron-right" />
        </button>
    </div>
    <div class="mt-8 flex flex-row justify-center items-center flex-wrap gap-2">
        <button
            :class="[
                'focus:outline-none w-2 h-2 rounded-full',
                i === currentIndex ? 'bg-gray-800' : 'bg-gray-400',
            ]"
            v-for="(_, i) in Array(images.length)"
            @click="currentIndex = i"
        ></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, PropType } from "vue";

export default defineComponent({
    props: {
        images: {
            type: Array as PropType<string[]>,
            required: true,
        },
        imgClassNames: {
            type: Array as PropType<string[]>,
            required: true,
        },
    },
    data() {
        const data: {
            currentIndex: number;
            currentImage: string | null;
        } = {
            currentIndex: 0,
            currentImage: null,
        };

        return data;
    },
    mounted() {
        this.updateImage();
        watch(
            () => this.currentIndex,
            () => this.updateImage()
        );
    },
    methods: {
        updateImage() {
            this.currentImage = this.images?.[this.currentIndex] || null;
        },
        changeIndex(inc: number) {
            const n = this.currentIndex + inc;
            this.currentIndex = this.images[n]
                ? n
                : inc > 0
                ? 0
                : this.images.length - 1;
        },
    },
});
</script>
