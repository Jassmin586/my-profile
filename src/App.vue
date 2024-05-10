<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="" width="125" height="125" />

    <nav>
      <RouterLink to="/">User profile</RouterLink>
      <RouterLink to="/user-information-form">User information form</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
