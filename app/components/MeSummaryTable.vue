<script setup lang="ts">
defineProps<{
    location: string;
    gender: string;
    links: Array<{ label: string; value: string; href: string }>;
}>();

const { age } = useBirthday();
</script>

<template>
    <div
        class="w-full overflow-x-auto min-w-0 flex justify-center items-center"
    >
        <div class="grid grid-cols-[auto_auto] gap-x-7 w-max whitespace-pre overflow-x-auto">
            <span>Location:</span>
            <p>{{ location }}</p>

            <span>Gender:</span>
            <p>{{ gender }}</p>

            <span>Age:</span>
            <p>{{ age }} y.o.</p>

            <template v-for="link in links" :key="link.href">
                <span>{{ link.label }}:</span>
                <p>
                    <NuxtLink :to="link.href" class="text-link break-all">{{
                        link.value
                    }}</NuxtLink>
                </p>
            </template>
        </div>
    </div>
</template>
