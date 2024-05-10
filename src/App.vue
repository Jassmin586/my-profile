<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <main class="pb-20 container mx-auto my-6">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped></style>
