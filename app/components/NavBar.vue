<template>
    <nav class="w-full max-w-3xl p-2 flex flex-col gap-1">
        <h1
            class="squish border font-bold text-2xl w-full text-ellipsis overflow-hidden"
        >
            <NuxtLink class="p-3 flex justify-center items-center" active-class="text-red-400" to="/"
                >nikableh.moe</NuxtLink
            >
        </h1>
        <ul
            class="flex flex-row gap-1 flex-wrap justify-evenly items-center text-center overflow-x-auto min-w-0"
        >
            <li class="squish border flex-1 whitespace-nowrap font-bold">
                <NuxtLink class="block w-full p-1 px-3" active-class="text-red-400" href="/notes">Notes</NuxtLink>
            </li>
            <li class="squish border flex-1 whitespace-nowrap font-bold">
                <NuxtLink class="block w-full p-1 px-3" active-class="text-red-400" href="/guestbook">Guestbook</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
