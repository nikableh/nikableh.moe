<script setup lang="ts">
import confetti from "canvas-confetti";

function bleh(e: PointerEvent) {
    const scalar = 3;

    let normX = e.clientX / window.innerWidth;
    let normY = e.clientY / window.innerHeight;

    confetti({
        spread: 360,
        ticks: 50,
        gravity: 0,
        startVelocity: 5,
        shapes: [
            confetti.shapeFromText({
                text: "bleh",
                color: "#FFFFFF",
                scalar: scalar,
                fontFamily: "Maple Mono",
            }),
        ],
        particleCount: 1,
        flat: true,
        scalar: scalar,
        origin: { x: normX, y: normY },
    });
}

const { isBirthday } = useBirthday();

useHead({
    link: [
        {
            rel: "preload",
            href: "/nikableh.png",
            as: "image",
            fetchpriority: "high",
        },
    ],
});
</script>

<template>
    <ClientOnly>
        <BirthdayConfetti />
    </ClientOnly>
    <div class="select-none flex flex-col justify-center items-center" :class="{ 'pt-15': isBirthday }">
        <div class="relative cursor-pointer" @pointerup="bleh">
            <img
                v-if="isBirthday"
                src="/party-hat.png"
                alt="party hat"
                width="80px"
                class="absolute left-1/2 -translate-x-[20px] -top-[62px] rotate-5 scale-75 pointer-events-none z-10"
                draggable="false"
            />
            <img
                src="/nikableh.png"
                alt="nikableh's profile picture"
                width="200"
                height="200"
                draggable="false"
                loading="eager"
                fetch-priority="high"
            />
        </div>
        <div class="relative w-25">
            <img
                v-if="isBirthday"
                src="/cake-is-a-lie.png"
                alt="party hat"
                width="80px"
                class="absolute left-24 -top-20 rotate-10 scale-150 pointer-events-none"
                draggable="false"
            />
        </div>
        <span
            v-if="isBirthday"
            class="pulse relative text-shadow-lg scale-150 pointer-events-none pt-7 pb-1"
        >
            TODAY'S MY BIRTHDAY!
        </span>
    </div>
</template>

<style lang="css" scoped>
.pulse {
    animation: zoomPulse 1.5s ease-in-out infinite;
}

@keyframes zoomPulse {
  0%, 100% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
