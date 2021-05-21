<template>
    <div class="form-item">
        <div class="form-item__password">
            <label
                :for="uniq"
                class="form-label form-label_required"
            >Пароль</label>
            <input
                type="password"
                :name="uniq"
                :id="uniq"
                :placeholder="placeholder"
                class="form-input"
                :class="{'form-error': error}"
                autocomplete="off"
                v-model="modelInput"
            >
            <small v-if="error" class="error-label">{{ error }}</small>
        </div>

        <div v-if="isRepass" class="form-item__repass">
            <label class="form-label form-label_required">Повторите пароль</label>
            <input
                type="password"
                :name="'re'+uniq"
                :id="'re'+uniq"
                :placeholder="placeholder"
                class="form-input"
                :class="{'form-error': error}"
                autocomplete="off"
                v-model="repass"
            >
            <small v-if="error" class="error-label">{{ error }}</small>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'title',
        event: 'change'
    },

    props: {
        isRepass: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        uniq: {
            type: String,
            default: 'uniq'
        },
        error: {
            type: String,
        },
    },
    data: () => ({
        repass: ''
    }),
    computed: {
        modelInput: {
            get () {
                return this.value;
            },
            set (val) {
                this.$emit('change', val);
            }
        },
    }
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
.form-item__repass {
    margin-top: 1.5rem;
}
</style>
