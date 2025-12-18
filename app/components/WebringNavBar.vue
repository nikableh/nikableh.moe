<template>
    <nav class="">
        <ul class="flex justify-between p-2">
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/prev"
                    class="before:content-['< ']"
                    >prev</NuxtLink
                >
            </li>
            <li>
                <NuxtLink to="https://webring.otomir23.me/">webring</NuxtLink>
            </li>
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/next"
                    class="after:content-[' >']"
                    >next</NuxtLink
                >
            </li>
        </ul>
    </nav>
</template>
