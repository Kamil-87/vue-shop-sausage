<template>
    <div class="form-item input-tel">
        <label
                v-if="label"
                class="form-label"
                :class="{'form-label_required' : requiredField}"
        >{{ label }}</label>
        <span class="input-tel__7">+7</span>
        <input
                type="number"
                :name="uniq"
                :id="uniq"
                :placeholder="placeholder"
                :class="error ? 'form-error' : ''"
                class="form-input"
                :disabled="disabled"
                :value="title"
                @change="$emit('change', $event.target.value)"
        />
        <small v-if="error" class="error-label">{{ error }}</small>
    </div>
</template>

<script>
  export default {
    name: "InputPhone",
    model: {
      prop: 'title',
      event: 'change'
    },

    props: {
      title: String,
      value: String,
      // autocomplete: [Number, Boolean],

      disabled: {
        type: Boolean,
        default: false
      },
      error: {
        type: [String, Boolean],
      },
      placeholder: {
        type: String,
        default: ""
      },
      uniq: {
        type: String,
        default: "uniq"
      },
      label: {
        type: String,
        default: ""
      },
      requiredField: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss" scoped>
.form-label_required {
    &:after {
        content: '*';
        font-size: 0.9em;
        margin-left: 0.2em;
        line-height: 0.7em;
        color: #D53128;
    }
}

    .input-tel {
        &__7 {
            position: absolute;
            top: 35.4px;
            left: 15px;
            font-size: 1.6rem;
        }
        & input {
            padding-left: 29px;
        }
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
    input[type="number"]:hover,
    input[type="number"]:focus {
        -moz-appearance: number-input;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>
