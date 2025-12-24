<script setup lang="ts">
const props = defineProps<{
    website: string;
    image: string;
    alt: string;
}>();
</script>

<template>
    <NuxtLink :to="props.website" class="select-none inline-block m-1">
        <NuxtImg
            width="88"
            height="31"
            :src="image"
            :alt="props.alt"
            placeholder="/88x31-unknown.png"
            loading="lazy"
        />
    </NuxtLink>
</template>
