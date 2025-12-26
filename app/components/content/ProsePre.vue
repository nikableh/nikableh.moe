<template>
    <pre
        :class="$props.class"
        class="pre"
    ><code class="code"><slot mdc-unwrap="code" /></code></pre>
</template>

<script setup lang="ts">
defineProps({
    code: {
        type: String,
        default: "",
    },
    language: {
        type: String,
        default: null,
    },
    filename: {
        type: String,
        default: null,
    },
    highlights: {
        type: Array as () => number[],
        default: () => [],
    },
    meta: {
        type: String,
        default: null,
    },
    class: {
        type: String,
        default: null,
    },
});
</script>

<style lang="css" scoped>
@reference "~/assets/css/main.css";

.pre {
    @apply w-full overflow-x-auto min-w-0 block text-sm;
}

.pre .code {
    @apply block whitespace-pre overflow-x-auto;
}

.pre .code .line {
    display: block;
}
</style>
