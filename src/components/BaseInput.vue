<script setup lang="ts">
import type { BaseFieldProps, GenericObject } from 'vee-validate'
import type { Ref } from 'vue'

defineProps<{
  placeholder?: string
  autocomplete?: string
  inputProps: Ref<BaseFieldProps & GenericObject>
  label: string
  error?: string
  type?: string
}>()
const modelValue = defineModel({ required: true })
</script>

<template>
  <div>
    <label>
      <span class="block mb-2">
        {{ label }}
      </span>
      <input
        :placeholder="placeholder"
        v-model="modelValue"
        v-bind="inputProps"
        :autocomplete="autocomplete"
        :type="type"
        class="px-3 py-2 rounded w-full text-black"
      />
    </label>
    <p class="text-red-500 mt-1">{{ error }}</p>
  </div>
</template>
