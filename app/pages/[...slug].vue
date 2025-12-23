<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() =>
    queryCollection("content").path(route.fullPath).first()
);

if (!data.value) {
    throw createError({
        status: 404,
        statusText: "Page Not Found, stupid",
    });
}

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description,
});
</script>

<template>
    <article class="max-w-full">
        <ContentRenderer :value="data!" />
    </article>
</template>
