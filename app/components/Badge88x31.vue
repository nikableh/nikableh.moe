<script setup lang="ts">
const props = defineProps<{
    website: string;
    image: string;
    alt: string;
}>();
</script>

<template>
    <NuxtLink :to="props.website" class="select-none inline-block m-1">
        <img
            width="88"
            height="31"
            :src="image"
            :alt="props.alt"
            class="badge"
        />
    </NuxtLink>
</template>

<style lang="css" scoped>
.badge {
    image-rendering: pixelated;
}
</style>
