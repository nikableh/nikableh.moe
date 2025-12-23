<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
    <NuxtLayout name="default">
        <div class="flex flex-col gap-5">
            <ProseH1>{{ error.statusCode }}</ProseH1>
            <p>
                OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko
                boingo! The code monkeys at our headquarters are working VEWY
                HAWD to fix this!
            </p>
            <ProseA href="/">Go back home</ProseA>
        </div>
    </NuxtLayout>
</template>
