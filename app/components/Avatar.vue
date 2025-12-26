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
    <div class="select-none flex flex-col justify-center items-center">
        <img
            v-if="isBirthday"
            src="/party-hat.png"
            alt="party hat"
            width="80px"
            class="relative -left-3.75 -top-3.5 -rotate-7 scale-150 pointer-events-none pt-5"
            draggable="false"
        />
        <div class="cursor-pointer" @pointerup="bleh">
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
    </div>
</template>
