<template>
    <div class="form-item">
        <label
            v-if="label"
            class="form-label"
            :class="{'form-label_required' : requiredField}"
        >
            {{ label }}</label>
        <input
            type="email"
            :name="uniq"
            :id="uniq"
            :placeholder="placeholder"
            :class="{'form-error': error}"
            class="form-input"
            :value="title"
            @change="$emit('change', $event.target.value)"
        >
        <label v-if="error" class="error-label">{{ error }}</label>
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
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'Email'
        },
        uniq: {
            type: String,
            default: 'uniq'
        },
        error: {
            type: [String, Boolean],
            default: "Ошибка в поле",
        },
        requiredField: {
            type: Boolean,
            default: false
        }
    },

    computed: {}
}
</script>

<style>

</style>
