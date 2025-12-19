<template>
    <div class="wip-ribbon top h-1 flex items-center"></div>
    <div
        class="bg-yellow-400 text-black w-full text-center text-tiny tracking-wider"
    >
        WORK IN PROGRESS
    </div>
    <div class="wip-ribbon bottom h-1 flex items-center"></div>
</template>

<style lang="css" scoped>
@import "tailwindcss";

.wip-ribbon {
    background: repeating-linear-gradient(
        -45deg,
        theme("colors.yellow.400") 0px,
        theme("colors.yellow.400") 10px,
        #000000 0px,
        #000000 20px
    );
    background-size: 56px 56px; /* Helps make positioning more predictable (√2 × 40px approx) */
}

/* Offset the bottom ribbon's pattern */
.wip-ribbon.bottom {
    background-position: 28px 0; /* Half the repeat cycle – adjust to taste (e.g., 20px, 35px) */
}
</style>
