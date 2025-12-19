<template>
    <nav>
        <ul class="flex justify-between py-2 px-4">
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/prev"
                    class="before:content-['< '] text-link"
                    >prev</NuxtLink
                >
            </li>
            <li>
                <NuxtLink to="https://webring.otomir23.me/" class="text-link">webring</NuxtLink>
            </li>
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/next"
                    class="after:content-[' >'] text-link"
                    >next</NuxtLink
                >
            </li>
        </ul>
    </nav>
</template>
