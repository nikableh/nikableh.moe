<template>
    <section class="bg-yetdarker h-full text-bodily flex flex-col items-center">
        <WipRibbon />
        <div class="flex flex-col items-center md:w-2xl">
            <main class="p-5 min-h-screen gap-5 flex flex-col items-center">
                <slot />
            </main>
            <WebringNavBar />
        </div>
    </section>
</template>
