<template>
    <div class="form-item">
        <label
            v-if="label"
            class="form-label"
            :class="{'form-label_required' : requiredField}"
        >{{ label }}</label>
        <input
            type="text"
            :name="uniq"
            :id="uniq"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
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
    name: 'InputText',

    model: {
        prop: 'title',
        event: 'change'
    },

    props: {
        title: String,
        value: String,
        autocomplete: [String, Boolean],

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
</style>
