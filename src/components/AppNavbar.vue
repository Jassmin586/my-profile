<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const menu = [
  {
    label: t('userProfile'),
    to: { name: 'user-profile' }
  },
  {
    label: t('userInformationForm'),
    to: { name: 'user-information-form' }
  }
]
</script>

<template>
  <nav>
    <ul class="flex items-center justify-center">
      <li v-for="item in menu" :key="item.label">
        <RouterLink :to="item.to" :title="item.label" class="p-4">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
