<script lang="ts" setup></script>

<template>
    <nav class="w-full p-2 flex flex-col gap-1">
        <div class="border flex p-1 justify-center items-center">
            <h1 class="m-1 p-1 font-bold text-2xl squish w-max text-ellipsis overflow-hidden">
                <NuxtLink to="/">nikableh.moe</NuxtLink>
            </h1>
        </div>
        <div class="border">
            <ul class="flex flex-col gap-2 p-5 justify-center items-center">
                <li>
                    <ProseA href="/notes">Notes</ProseA>
                </li>
                <li>
                    <ProseA href="/guestbook">Guestbook</ProseA>
                </li>
            </ul>
        </div>
    </nav>
</template>
