<script setup lang="ts">
const props = defineProps<{
    website: string;
    image: string;
    alt: string;
}>();

const fallbackImage = "/88x31-unknown.png";

const imgSrc = ref(props.image);

watch(
    () => props.image,
    (newVal) => {
        imgSrc.value = newVal;
    }
);

function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = fallbackImage;
}
</script>

<template>
    <ClientOnly>
        <NuxtLink :to="props.website" class="select-none inline-block m-1">
            <img :src="imgSrc" :alt="props.alt" @error="handleImageError" />
        </NuxtLink>
    </ClientOnly>
</template>
