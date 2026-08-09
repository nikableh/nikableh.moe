<script setup lang="ts">
defineProps<{
    friends: Array<{ name: string; website: string; badge: string }>;
}>();
</script>

<template>
    <section class="text-center w-full">
        <Badge88x31
            v-for="friend in friends"
            :key="friend.website"
            :website="friend.website"
            :image="friend.badge"
            :alt="`${friend.name}'s 88x31 badge`"
        />
    </section>
</template>
