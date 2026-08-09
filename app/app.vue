<script setup lang="ts">
import { site } from "~~/shared/site";

useHead({
    titleTemplate: (title) =>
        title && title !== site.author ? `${title} · ${site.name}` : site.author,
    link: [
        ...site.profiles.map((href) => ({ rel: "me", href })),
        { rel: "me", href: `mailto:${site.email}` },
    ],
});

useSeoMeta({
    ogSiteName: site.name,
    ogType: "website",
    ogLocale: "en_US",
    ogImage: `${site.url}/og.png`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${site.author}'s avatar next to the name ${site.author}`,
    twitterCard: "summary_large_image",
    twitterSite: site.twitter,
    twitterCreator: site.twitter,
    twitterImage: `${site.url}/og.png`,
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
