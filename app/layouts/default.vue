<template>
    <section class="flex flex-col items-center w-full">
        <NavBar />
        <div class="flex flex-col items-center w-full max-w-2xl">
            <main
                class="p-5 min-h-screen w-full max-w-2xl gap-5 flex flex-col items-center"
            >
                <slot />
            </main>
            <WebringNavBar />
        </div>
    </section>
</template>
