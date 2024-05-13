<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'

const { firstName, lastName, email, phone, birthday, about, avatarBase64 } = useProfileStore()
</script>

<template>
  <h1 class="text-3xl font-bold mb-10 border-b pb-2 tracking-wide text-center md:text-left">
    {{ $t('userProfile') }}
  </h1>

  <section
    class="flex flex-col md:grid md:grid-cols-3 gap-6 text-lg bg-zinc-800 p-5 md:p-12 rounded-md text-center md:text-left"
  >
    <div class="md:col-span-3 mb-10">
      <img
        :src="avatarBase64"
        :alt="$t('avatar')"
        class="size-40 rounded-full bg-white border-2 border-white mx-auto object-cover"
      />
    </div>

    <div>
      <h2 class="text-md font-semibold">{{ $t('firstName') }}</h2>
      <p>{{ firstName || '-' }}</p>
    </div>

    <div>
      <h2 class="text-md font-semibold">{{ $t('lastName') }}</h2>
      <p>{{ lastName || '-' }}</p>
    </div>

    <div>
      <h2 class="text-md font-semibold">{{ $t('email') }}</h2>
      <p>{{ email || '-' }}</p>
    </div>

    <div>
      <h2 class="text-md font-semibold">{{ $t('phone') }}</h2>
      <p>{{ phone || '-' }}</p>
    </div>

    <div>
      <h2 class="text-md font-semibold">{{ $t('birthday') }}</h2>
      <p>
        <template v-if="birthday">
          {{ `${birthday.getDate()} / ${birthday.getMonth() + 1} / ${birthday.getFullYear()}` }}
        </template>
        <template v-else> - </template>
      </p>
    </div>

    <div class="col-span-3">
      <h2 class="text-md font-semibold">{{ $t('about') }}</h2>
      <p>{{ about || '-' }}</p>
    </div>
  </section>
</template>
