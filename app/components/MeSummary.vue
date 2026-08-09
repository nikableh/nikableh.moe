<script setup lang="ts">
import { site } from "~~/shared/site";

const props = defineProps<{
    name: string;
    alias: string;
    birthday: string;
    location: string;
    gender: string;
    links: Array<{ label: string; value: string; href: string }>;
}>();

provideBirthday(props.birthday);
</script>

<template>
    <section class="h-card flex flex-col justify-center items-center gap-5">
        <Avatar />
        <!-- Invisible, but microformats parsers read it: this h-card is the
             card for the site itself, the name lives in the page h1 outside
             the card's reach, and the photo is the full png — an anchor
             carries the property so nothing downloads 1.6MB for it. -->
        <a class="u-url u-uid hidden" :href="`${site.url}/`">{{ site.name }}</a>
        <a class="u-photo hidden" :href="`${site.url}/nikableh.png`">{{ alias }}'s avatar</a>
        <span class="hidden">
            <span class="p-name">{{ name }}</span>
            <span class="p-nickname">{{ alias }}</span>
        </span>
        <MeSummaryTable
            :location="location"
            :gender="gender"
            :links="links"
        />
    </section>
</template>
