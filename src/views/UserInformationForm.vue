<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useProfileStore } from '@/stores/profile';

const store = useProfileStore();

const { name, nameProps, email, emailProps, errors } =
  storeToRefs(store);
</script>
<template>
  <h1 class="text-3xl font-bold underline text-blue-600">
    User information form
  </h1>
  <form @submit="store.submit" novalidate>
    <div class="field">
      <input placeholder="Name" v-model="name" v-bind="nameProps" />
      <span>{{ errors.name }}</span>
    </div>

    <div class="field">
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        v-bind="emailProps"
      />
      <span>{{ errors.email }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
