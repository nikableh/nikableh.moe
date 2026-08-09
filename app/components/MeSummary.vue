<script setup lang="ts">
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
    <section class="flex flex-col justify-center items-center gap-5">
        <Avatar />
        <p class="text-center">{{ name }} <em>(aka&nbsp;{{ alias }})</em></p>
        <MeSummaryTable
            :location="location"
            :gender="gender"
            :links="links"
        />
    </section>
</template>
