<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useProfileStore } from '@/stores/profile'
import { storeToRefs } from 'pinia'

const { firstName, lastName, email, phone, birthday, about, avatarBase64 } =
  storeToRefs(useProfileStore())

const setSavedData = () => {
  const profileAsString = sessionStorage.getItem('profile')
  const profile = profileAsString && JSON.parse(profileAsString)
  if (!profile) return

  const birthdayDate = new Date(profile.birthday)

  firstName.value = profile.firstName
  lastName.value = profile.lastName
  email.value = profile.email
  phone.value = profile.phone
  birthday.value = birthdayDate
  about.value = profile.about
  avatarBase64.value = profile.avatar
}

setSavedData()
</script>

<template>
  <AppHeader />
  <main class="pb-60 md:pb-48 container mx-auto py-6 px-4 md:px-0">
    <RouterView />
  </main>
  <AppFooter />
</template>
