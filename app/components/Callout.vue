<script setup lang="ts">
const { icon, color = "none" } = defineProps<{
    icon?: string;
    color?: CalloutColor;
}>();

type CalloutColor = "none" | "note" | "warning" | "caution";

const variants: Record<
    CalloutColor,
    {
        wrapper: string[];
        icon: string;
    }
> = {
    none: {
        wrapper: [],
        icon: "",
    },
    note: {
        wrapper: ["border-blue-500/30", "bg-blue-500/10"],
        icon: "text-sky-400",
    },
    warning: {
        wrapper: ["border-yellow-500/30", "bg-yellow-500/10"],
        icon: "text-yellow-400",
    },
    caution: {
        wrapper: ["border-red-500/30", "bg-red-500/10"],
        icon: "text-red-400",
    },
};

const calloutColorClass = computed(() => variants[color].wrapper);
const iconColorClass = computed(() => variants[color].icon);
</script>

<template>
    <div
        role="note"
        :class="calloutColorClass"
        class="border justify-center px-3 pt-0 rounded-2xl flex gap-3 text-sm w-full my-4"
    >
        <Icon
            v-if="icon"
            :name="icon"
            :class="iconColorClass"
            class="text-2xl my-3 shrink-0"
        />
        <div class="w-full min-w-0 self-center">
            <slot />
        </div>
    </div>
</template>
