<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(() =>
    queryCollection("notes")
        .path("/" + route.params.note!.toString())
        .first()
);

useSeoMeta({
    title: data.value?.title,
    description: data.value?.description,
});
</script>

<template>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Note not found</div>
</template>
