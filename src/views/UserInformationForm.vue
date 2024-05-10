<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/profile'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const store = useProfileStore()

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
  birthdayProps,
  about,
  aboutProps,
  avatar,
  avatarProps,
  meta,
  errors
} = storeToRefs(store)
</script>
<template>
  <h1 class="text-3xl font-bold mb-10 border-b pb-2">
    {{ $t('userInformationForm') }}
  </h1>
  <form @submit="store.submit" novalidate class="grid grid-cols-3 gap-y-4 gap-x-6">
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
      placeholder="123456789"
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
    </label>

    <BaseTextarea
      class="col-span-3"
      v-model="about"
      :label="$t('about')"
      :input-props="aboutProps"
      :error="errors.about"
    />

    <BaseUpload class="col-span-3" v-model="avatar" :label="$t('avatar')" />

    <div class="col-span-3">
      <button
        type="submit"
        :disabled="!meta.touched"
        class="rounded-xl border text-zinc-900 bg-white px-8 py-3 cursor-pointer font-bold"
      >
        {{ $t('submit') }}
      </button>
    </div>
  </form>
</template>
