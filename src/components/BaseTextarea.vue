<script setup lang="ts">
defineProps<{
  placeholder?: string
  label: string
  error?: string
}>()
const modelValue = defineModel<string>()
</script>

<template>
  <div class="field">
    <label>
      <span class="textarea__label">
        {{ label }}
      </span>
      <textarea v-model="modelValue" :placeholder="placeholder" class="field__textarea" />
    </label>
    <p class="field__error">{{ error }}</p>
  </div>
</template>

<style scoped>
.field__label {
  display: block;
  margin-bottom: 0.5rem;
}

.field__textarea {
  height: 15rem;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.25rem;
  color: #000;
}
@media (min-width: 768px) {
  .field__textarea {
    height: 12rem;
  }
}

.field__error {
  color: rgb(239 68 68);
  margin-top: 0.25rem;
  font-size: 0.75rem;
  min-height: 1rem;
}
</style>
