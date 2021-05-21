<template>
    <button
        :class="[ 'button', btnClass ]"
        :type="btnType"
        :disabled="disabled"
        @click="click($event)"
    >
        {{ btnText }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnText: {
            type: String,
            default: 'Кнопка'
        },
        btnClass: {
            type: String,
        },
        disabled: {
          type: Boolean,
          default: false
        },
        btnType: {
            type: String,
            default: 'submit',
        }
    },
    methods: {
        click(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="scss" scoped>


.button {
    min-width: 150px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    font-size: 2rem;
    line-height: 1;
    color: #ffffff;
    border-radius: 5px;
    white-space: nowrap;
    background: $colorBtn;
    outline: none;
    transition: all .3s;

    &:hover {
        background: lighten($colorBtn, .9);
    }
}

</style>
