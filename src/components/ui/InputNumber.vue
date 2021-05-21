<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      type="number"
      min="0"
      step="1"
      :name="uniq"
      :id="uniq"
      :placeholder="placeholder"
      :class="{'form-error': error}"
      class="form-input"
      :disabled="disabled">
    <label v-if="error" class="error-label">{{ error }}</label>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: Number,
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    error: {
      type: String,
      default: ""
    },
    uniq: {
      type: String,
      default: 'uniq'
    },
    label: {
      type: String,
      default: ''
    }
  },

  computed: {

  }
}
</script>

<style>

</style>
