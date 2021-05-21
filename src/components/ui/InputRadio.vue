<template>
  <div class="form-item">
      <input
      type="radio"
      class="form-radio"
      :name="name"
      :id="uniq"
      :value="title"
      @change="$emit('change', $event.target.value)"
      />
      <label
          v-if="label"
          class="form-radio-label"
          :class="[{'form-label_required' : requiredField}, labelClass]"
          :for="uniq"
      >
          {{ label }}
      </label>
  </div>
</template>

<script>
export default {

    model: {
        prop: 'title',
        event: 'change'
    },
  props: {
      title: [String, Number, Object, Array, Boolean],
      value: [String, Number, Object, Boolean],
    name: {
      type: String,
      default: "uniq",
    },
    uniq: {
      type: String,
      default: "uniq",
    },
    label: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
    requiredField: {
        type: Boolean,
        default: false
    }
  },

}
</script>

<style lang="scss" scoped>


</style>
