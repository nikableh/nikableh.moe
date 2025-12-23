<script setup lang="ts">
import confetti from "canvas-confetti";

const scalar = ref(3);

function bleh(e: PointerEvent) {
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
                scalar: scalar.value,
                fontFamily: "Maple Mono",
            }),
        ],
        particleCount: 1,
        flat: true,
        scalar: scalar.value,
        origin: { x: normX, y: normY },
    });
}
</script>

<template>
    <div class="cursor-pointer select-none" @pointerup="bleh">
        <img
            src="/nikableh.png"
            alt="nikableh's profile picture"
            width="200px"
            draggable="false"
            class="pointer-events-none select-none"
            loading="eager"
            fetch-priority="high"
        />
    </div>
</template>
