<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <main class="pb-48 container mx-auto py-6 px-4 md:px-0">
    <RouterView />
  </main>
  <AppFooter />
</template>
