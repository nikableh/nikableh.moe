<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>OOPSIE WOOPSIE!! Uwu you made a fucky wucky!! A wittle fucko boingo!</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
