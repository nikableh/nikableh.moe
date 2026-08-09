<script setup lang="ts">
import type { Shape } from "canvas-confetti";

// Rasterizing "bleh" to a canvas is the expensive half of the click handler,
// and the text never changes — do it once and keep the shape.
let blehShape: Shape | undefined;

async function bleh(e: PointerEvent) {
    // Dynamic so the library rides an async chunk instead of the entry that
    // gates hydration; onMounted below warms it, so this await is a cache hit.
    const { default: confetti } = await import("canvas-confetti");

    const scalar = 3;

    let normX = e.clientX / window.innerWidth;
    let normY = e.clientY / window.innerHeight;

    blehShape ??= confetti.shapeFromText({
        text: "bleh",
        color: "#FFFFFF",
        scalar: scalar,
        fontFamily: "Maple Mono",
    });

    confetti({
        spread: 360,
        ticks: 50,
        gravity: 0,
        startVelocity: 5,
        shapes: [blehShape],
        particleCount: 1,
        flat: true,
        scalar: scalar,
        origin: { x: normX, y: normY },
    });
}

const { isBirthday } = useBirthday();

useBirthdayConfetti();

// The 200x259 slot needs 400x518 to look right on a 2x screen, and that copy
// is 41KB against the original's 1.6MB. So the paint waits on the small one
// and the original lands on top of it afterwards: same box, same position,
// out of flow, so nothing moves and nothing before it is delayed. Chrome only
// re-reports LCP for a paint larger than the last one, so the second image
// does not push the metric out either.
const fullResolution = ref<string | null>(null);

onMounted(() => {
    // 1.6MB to sharpen an image already sharp below 3x is not a trade to make
    // on someone's metered connection. connection is not in lib.dom yet.
    const { connection } = navigator as Navigator & {
        connection?: { saveData?: boolean };
    };

    if (connection?.saveData) return;

    const upgrade = () => {
        const image = new Image();
        image.src = "/nikableh.png";

        // Handing the <img> an already-decoded frame keeps the swap from
        // blanking for a frame while it decodes two megapixels.
        image
            .decode()
            .catch(() => {})
            .then(() => {
                fullResolution.value = image.src;
            });

        // Warm the confetti chunk too, so the first click on the avatar
        // fires instantly instead of waiting on a fetch.
        import("canvas-confetti");
    };

    const whenIdle = () =>
        window.requestIdleCallback
            ? requestIdleCallback(upgrade, { timeout: 2000 })
            : setTimeout(upgrade, 500);

    if (document.readyState === "complete") {
        whenIdle();
    } else {
        window.addEventListener("load", whenIdle, { once: true });
    }
});

useHead({
    link: [
        {
            rel: "preload",
            href: "/nikableh-400.webp",
            as: "image",
            type: "image/webp",
            fetchpriority: "high",
        },
    ],
});
</script>

<template>
    <div class="select-none flex flex-col justify-center items-center" :class="{ 'pt-15': isBirthday }">
        <div class="relative cursor-pointer" @pointerup="bleh">
            <img
                v-if="isBirthday"
                src="/party-hat.webp"
                alt="party hat"
                width="80"
                height="109"
                class="absolute left-1/2 -translate-x-[20px] -top-[62px] rotate-5 scale-75 pointer-events-none z-10"
                draggable="false"
            />
            <!-- Tailwind's preflight sets height:auto, so these have to
                 match the file's own ratio or the box resizes on decode. -->
            <img
                src="/nikableh-400.webp"
                alt="nikableh's profile picture"
                width="200"
                height="259"
                draggable="false"
                loading="eager"
                fetchpriority="high"
            />
            <!-- h-full rather than the ratio trick above: this one has to cover
                 the copy underneath exactly, down to the last subpixel. -->
            <img
                v-if="fullResolution"
                :src="fullResolution"
                alt=""
                aria-hidden="true"
                width="200"
                height="259"
                class="absolute inset-0 h-full w-full"
                draggable="false"
            />
        </div>
        <div class="relative w-25">
            <img
                v-if="isBirthday"
                src="/cake-is-a-lie.webp"
                alt="the cake is a lie"
                width="80"
                height="77"
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
