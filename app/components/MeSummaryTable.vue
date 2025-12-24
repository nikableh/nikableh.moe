<script setup lang="ts">
import confetti from "canvas-confetti";

const { isBirthday, age } = useBirthday();

onMounted(() => {
    if (isBirthday) {
        const colors: string[] = [
            "#f2f641",
            "#f5a02c",
            "#25c4f5",
            "#83f658",
            "#cd32ce",
            "#f55c7b",
        ];

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            confetti({
                particleCount: 1,
                startVelocity: 0,
                colors: [colors[Math.floor(Math.random() * colors.length)]!],
                ticks: 50,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.8 - 0.2,
                },
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4),
            });

            requestAnimationFrame(frame);
        })();
    }
});
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
