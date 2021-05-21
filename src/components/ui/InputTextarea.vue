<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <textarea
      :name="uniq"
      :id="uniq"
      :placeholder="placeholder"
      class="form-textarea"
      :class="[{
        resize: !resize,
        'form-error': error,
        'grey-background': greyBackground,
        'form-input': formInput
      }, classTextarea]"
      :value="title"
      @change="$emit('change', $event.target.value)"
    ></textarea>
  <small v-if="error" class="error-label">{{ error }}</small>
  </div>
</template>

<script>
export default {
    model: {
        prop: 'title',
        event: 'change'
    },

  props: {
      title: String,
      value: String,
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    uniq: {
      type: String,
    },
    label: {
      type: String,
      default: ""
    },
    resize: {
      type: Boolean,
      default: true
    },
    classTextarea:{
      type: String,
      default: ""
    },
    greyBackground: {
      type: Boolean,
      default: false
    },
    formInput: {
      type: Boolean,
      default: false
    }
  },

  computed: {

  }
};
</script>
<style lang="scss" scoped>


.resize {
  resize: none;
}

.grey-background {
    background: #f7f7f7;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    padding: 6px 10px;
}
</style>
