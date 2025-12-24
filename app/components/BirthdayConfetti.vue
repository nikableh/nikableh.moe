<script setup lang="ts">
import confetti from "canvas-confetti";

const { isBirthday } = useBirthday();

let animationId: number | null = null;

function fireConfetti() {
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

    // Continue the loop only if still birthday
    if (isBirthday.value) {
        animationId = requestAnimationFrame(fireConfetti);
    }
}

// Watch for changes to start/stop the animation
watch(
    isBirthday,
    (newValue) => {
        if (newValue) {
            // Start firing confetti
            if (!animationId) {
                fireConfetti();
            }
        } else {
            // Stop the loop
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        }
    },
    { immediate: true } // Run immediately to handle initial value
);

// Cleanup in case component unmounts while running
onUnmounted(() => {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
    }
});
</script>
