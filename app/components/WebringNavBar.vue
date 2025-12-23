<template>
    <nav class="w-full">
        <ul class="flex justify-between pb-2 px-4 gap-5">
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/prev"
                    class="before:content-['< '] text-link whitespace-nowrap"
                    >prev</NuxtLink
                >
            </li>
            <li>
                <NuxtLink to="https://webring.otomir23.me/" class="text-link">webring</NuxtLink>
            </li>
            <li>
                <NuxtLink
                    to="https://webring.otomir23.me/nikableh/next"
                    class="after:content-[' >'] text-link whitespace-nowrap"
                    >next</NuxtLink
                >
            </li>
        </ul>
    </nav>
</template>
