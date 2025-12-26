<template>
    <section class="flex flex-col items-center w-full">
        <div class="flex flex-col items-center w-full max-w-2xl">
            <NavBar />
            <main
                class="p-5 min-h-screen w-full max-w-2xl gap-5 flex flex-col items-center"
            >
                <slot />
            </main>
            <WebringNavBar />
        </div>
    </section>
</template>
