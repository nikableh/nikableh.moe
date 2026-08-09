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
             card for the site itself. -->
        <a class="u-url u-uid hidden" :href="`${site.url}/`">{{ site.name }}</a>
        <p class="text-center">
            <span class="p-name">{{ name }}</span>
            <em> (aka&nbsp;<span class="p-nickname">{{ alias }}</span>)</em>
        </p>
        <MeSummaryTable
            :location="location"
            :gender="gender"
            :links="links"
        />
    </section>
</template>
