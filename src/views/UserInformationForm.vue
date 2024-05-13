<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/profile'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

const store = useProfileStore()
const isSaved = ref(false)

const {
  firstName,
  firstNameProps,
  lastName,
  lastNameProps,
  email,
  emailProps,
  phone,
  phoneProps,
  birthday,
  about,
  avatar,
  errors
} = storeToRefs(store)

const onSubmit = () => {
  store.submit()
  isSaved.value = true
  setTimeout(() => {
    isSaved.value = false
  }, 5000)
}
</script>
<template>
  <h1 class="text-3xl font-bold mb-10 border-b pb-2 tracking-wide text-center md:text-left">
    {{ $t('userInformationForm') }}
  </h1>
  <form
    @submit.prevent="onSubmit"
    novalidate
    class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6"
  >
    <BaseInput
      v-model="firstName"
      :label="$t('firstName')"
      autocomplete="given-name"
      :input-props="firstNameProps"
      :error="errors.firstName"
    />

    <BaseInput
      v-model="lastName"
      :label="$t('lastName')"
      autocomplete="family-name"
      :input-props="lastNameProps"
      :error="errors.lastName"
    />

    <BaseInput
      v-model="email"
      :label="$t('email')"
      autocomplete="email"
      :input-props="emailProps"
      :error="errors.email"
      type="email"
      placeholder="jfraser@example.com"
    />

    <BaseInput
      v-model="phone"
      :label="$t('phone')"
      autocomplete="phone"
      :input-props="phoneProps"
      :error="errors.phone"
      type="tel"
    />

    <label>
      <span class="block mb-2"> {{ $t('birthday') }} </span>
      <VueDatePicker
        v-model="birthday"
        auto-apply
        :enable-time-picker="false"
        format="dd/MM/yyyy"
        autocomplete="bday"
        :max-date="new Date()"
      />
      <p class="text-red-500 mt-1 text-xs min-h-4">{{ errors.birthday }}</p>
    </label>

    <BaseTextarea
      class="md:col-span-2 lg:col-span-3"
      v-model="about"
      :label="$t('about')"
      :error="errors.about"
    />

    <BaseUpload
      class="md:col-span-2 lg:col-span-3"
      v-model="avatar"
      :label="$t('avatar')"
      :error="errors.avatar"
    />

    <div class="md:col-span-2 lg:col-span-3 text-center mt-4">
      <button
        type="submit"
        class="rounded-xl border text-white bg-zinc-800 border-white px-20 py-3 cursor-pointer font-bold w-full md:w-auto hover:text-zinc-800 focus:text-zinc-800 hover:bg-white focus:bg-white transition-colors"
      >
        {{ $t('submit') }}
      </button>
      <p class="text-sm text-green-500 mt-2 h-5" :class="{ invisible: !isSaved }">
        {{ $t('changesSaved') }}
      </p>
    </div>
  </form>
</template>
