<template>
    <div
        role="note"
        class="[&>*:last-child]:mb-0 border p-3 rounded-2xl flex gap-3 text-sm w-full callout my-4 px-5 py-4 overflow-hidden border-sky-500/30 bg-sky-500/10"
    >
        <Icon name="material-symbols:info-outline" class="text-sky-400/70 text-3xl" />
        <div class="w-full">
            <slot />
        </div>
    </div>
</template>
