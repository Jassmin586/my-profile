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
    <ul class="flex items-center justify-center gap-x-8">
      <li v-for="item in menu" :key="item.label">
        <RouterLink
          :to="item.to"
          :title="item.label"
          class="flex justify-center flex-col relative tracking-wider after:content-[''] after:h-px after:w-0 hover:after:w-full focus:after:w-full after:duration-300 after:absolute after:bottom-0 after:left-0 after:bg-white after:transition-width"
          active-class="after:!w-full"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
