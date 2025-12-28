<template>
    <div
        role="note"
        class="border justify-center px-3 pt-0 rounded-2xl flex gap-3 text-sm w-full my-4 border-sky-500/30 bg-sky-500/10"
    >
        <Icon name="material-symbols:info-outline" class="shrink-0 text-sky-400 text-2xl my-3" />
        <div class="w-full min-w-0 self-center">
            <slot />
        </div>
    </div>
</template>
