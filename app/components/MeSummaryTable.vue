<script setup lang="ts">
const { age } = useBirthday();
</script>

<template>
    <div
        class="w-full overflow-x-auto min-w-0 flex justify-center items-center"
    >
        <div class="grid grid-cols-[auto_auto] gap-x-7 w-max whitespace-pre overflow-x-auto">
            <span>Location:</span>
            <p>Moscow, Russia</p>

            <span>Gender:</span>
            <p>she/her 🏳️‍⚧️</p>

            <span>Age:</span>
            <p>{{ age }} y.o.</p>

            <span>Telegram:</span>
            <p>
                <NuxtLink to="https://t.me/nikableh" class="text-link"
                    >@nikableh</NuxtLink
                >
            </p>

            <span>Github:</span>
            <p>
                <NuxtLink to="https://github.com/nikableh" class="text-link"
                    >@nikableh</NuxtLink
                >
            </p>

            <span>Email:</span>
            <p>
                <NuxtLink
                    to="mailto:nika@nikableh.moe"
                    class="text-link break-all"
                    >nika@nikableh.moe</NuxtLink
                >
            </p>
        </div>
    </div>
</template>
