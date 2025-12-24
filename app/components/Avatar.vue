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
</script>

<template>
    <div
        class="select-none flex flex-col justify-center items-center not-prose gap-5"
    >
        <div class="cursor-pointer" @pointerup="bleh">
            <img
                src="/nikableh.png"
                alt="nikableh's profile picture"
                width="200px"
                draggable="false"
                loading="eager"
                fetch-priority="high"
            />
        </div>
    </div>
</template>
