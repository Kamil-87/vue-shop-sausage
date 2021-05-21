<template>
    <div class="form-item">
    <label class="checkbox">
        <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        >
        <span class="checkmark"></span>
        <span :class="labelClass">
                 {{ labelText }}
            </span>
    </label>
    <small v-if="error" class="error-label">{{ error }}</small>
</div>
</template>

<script>
export default {
    name: 'InputCheck',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean,
        labelText: {
            type: String,
        },
        labelClass: {
            type: String,
        },
        error: {
            type: [String, Boolean],
        },
    }
}
</script>

<style lang="scss" scoped>


.label-text {
    color: $colorText;
}

.checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
}

.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    //top: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    border: 1px solid $grey;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox input:checked ~ .checkmark:after {
    display: block;
}

.checkbox .checkmark:after {
    left: 9px;
    top: 5px;
    width: 6px;
    height: 12px;
    border: solid $colorBtn;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
