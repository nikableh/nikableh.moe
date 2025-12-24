<script setup lang="ts">
function createBirthday(day: number, month: number, year: number): Date {
    // Month in JavaScript Date is 0-based (0 = January, 11 = December)
    return new Date(year, month - 1, day);
}

function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

const birthday = createBirthday(1, 8, 2004);
const age = ref(calculateAge(birthday));
</script>

<template>
    <div class="grid grid-cols-[auto_auto] gap-x-7 w-max">
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
            <NuxtLink to="mailto:nika@nikableh.moe" class="text-link break-all"
                >nika@nikableh.moe</NuxtLink
            >
        </p>
    </div>
</template>
