<script setup lang="ts">
useSeoMeta({
    title: "nikableh | Guestbook",
    description: "Guestbook of the nikableh.moe website",
});
</script>

<template>
    <Giscus
        id="comments"
        repo="nikableh/nikableh.moe"
        repoId="R_kgDOPgzt-A"
        category="Giscus"
        categoryId="DIC_kwDOPgzt-M4C0Qiw"
        mapping="pathname"
        strict="0"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme="gruvbox_dark"
        lang="en"
        loading="eager"
    />
</template>
