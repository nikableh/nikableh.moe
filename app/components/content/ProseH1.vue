<template>
    <h1 :id="props.id" class="text-3xl flex font-bold pb-3 pt-5">
        <a
            v-if="generate"
            :href="`#${props.id}`"
            class="transition-transform duration-75 ease-out active:scale-90"
        >
            <span class="mr-2 select-none">#</span>
            <slot />
        </a>
        <slot v-else />
    </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
    () =>
        props.id &&
        ((typeof headings?.anchorLinks === "boolean" &&
            headings?.anchorLinks === true) ||
            (typeof headings?.anchorLinks === "object" &&
                headings?.anchorLinks?.h1))
);
</script>
