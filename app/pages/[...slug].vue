<script setup lang="ts">
import { site } from "~~/shared/site";

const route = useRoute();

const { data } = await useAsyncData(() =>
    queryCollection("content").path(route.path).first()
);

if (!data.value) {
    throw createError({
        status: 404,
        statusText: "Page Not Found, stupid",
    });
}

// The homepage's description is the site's; keeping it out of the
// frontmatter leaves shared/site.ts as the single copy.
const description =
    route.path === "/" ? site.description : data.value?.description;

useSeoMeta({
    title: data.value?.title,
    description,
    ogTitle: data.value?.title,
    ogDescription: description,
});
</script>

<template>
    <article class="w-full">
        <ContentRenderer :value="data!" />
    </article>
</template>
