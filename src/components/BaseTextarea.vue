<script setup lang="ts">
defineProps<{
  placeholder?: string
  label: string
  error?: string
}>()
const modelValue = defineModel<string>()
</script>

<template>
  <div>
    <label>
      <span class="block mb-2">
        {{ label }}
      </span>
      <textarea
        v-model="modelValue"
        :placeholder="placeholder"
        class="h-32 w-full px-3 py-2 rounded text-black"
      />
    </label>
    <p class="text-red-500 mt-1">{{ error }}</p>
  </div>
</template>
