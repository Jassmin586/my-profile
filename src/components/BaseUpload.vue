<script setup lang="ts">
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
  (e: 'update', value: any): void
}>()

const onChange = (e: InputEvent) => {
  emit('update', e)
}
</script>

<template>
  <div>
    <label>
      <span class="block mb-2"> {{ label }} </span>

      <input
        :disabled="disabled || loading"
        type="file"
        class="flex cursor-pointer gap-small rounded-xl border p-5"
        :accept="accept"
        @change="onChange"
      />
    </label>
    <p>{{ error }}</p>
  </div>
</template>
