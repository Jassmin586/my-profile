<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    label: string
    disabled?: boolean
    error?: string
    loading?: boolean
    accept?: string
  }>(),
  {
    label: '',
    disabled: false,
    error: '',
    loading: false,
    accept: 'image/*'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value?: File): void
}>()

const onChange = (event: Event) => {
  const file = (event.target as HTMLInputElement)?.files?.[0]
  emit('update:modelValue', file)
}
</script>

<template>
  <div>
    <label>
      <span class="block mb-2"> {{ label }} </span>

      <input
        :disabled="disabled || loading"
        type="file"
        class="flex cursor-pointer gap-small rounded-xl border p-5 w-full md:w-auto"
        :accept="accept"
        @change="onChange"
      />
    </label>
    <p class="text-red-500 mt-1">{{ error }}</p>
  </div>
</template>
