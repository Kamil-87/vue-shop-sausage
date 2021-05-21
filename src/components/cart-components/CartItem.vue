<template>
    <div class="cart-item">

        <div class="cart-item__description">
            <div class="cart-item__img">
                <img :src="imageUrl" :alt="name">
            </div>
            <div class="cart-item__text">
                <router-link class="cart-item__name" to="#">{{ name }}</router-link>
                <p class="cart-item__price">{{ price }} руб/{{ unit }}</p>
            </div>
        </div>

        <div class="cart-item__control field-control">
            <div class="field-control__quantity">
                <button
                    class="field-control__btn"
                    @click="decrementItem"
                >-
                </button>
                <input
                    class="field-control__input"
                    type="number"
                    min="1"
                    max="999"
                    value="1"
                    v-model="quantity"
                    required>
                <button
                    class="field-control__btn"
                    @click="incrementItem"
                >+
                </button>
            </div>
            <p class="field-control__total">{{ totalPriceProduct }}&nbsp;руб</p>
            <div class="field-control__del">
                <button @click="deleteFromCart">x</button>
            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'CartItem',
    props: {
        name: {
            type: String,
            default: ''
        },
        price: {
            type: Number,
            // default: 0
        },
        unit: {
            type: String,
            default: ''
        },
        quantity: {
            type: Number,
            default: ''
        },
        imageUrl: {
            type: String
        },
        totalPriceProduct: {
            type: Number,
        }
    },
    data() {
        return ({

        })
    },
    computed: {
        ...mapGetters([
            'CART'
        ]),
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrementItem')
        },
        incrementItem() {
            this.$emit('incrementItem')
        }
    }

}
</script>

<style lang="scss" scoped>


.cart-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $greyLight;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &__img {
        margin-right: 3rem;

        img {
            width: 100px;
        }
    }

    &__title {
        flex-grow: 1;
    }

    &__description {
        display: flex;
        align-items: center;
        width: 100%;
    }

    &__name {
        font-size: 24px;
        color: #333333;
        display: block;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    &__control {
        display: flex;
        align-items: center;
    }
}

.field-control {
    width: 40%;
    margin-left: 3rem;

    &__btn {
        width: 25px;
        height: 25px;
    }

    &__quantity {
        display: flex;
        align-items: center;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &__input {
        border: 1px solid $greyExtraLight;
        width: 30px;
        text-align: center;
        height: 25px;
        padding: 0 3px;
    }

    &__total {
        margin-left: 3rem;
    }

    &__del {
        margin-left: 3rem;

        button {
            background: $grey;
            color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;

            &:hover {
                background: red;
            }
        }
    }
}

</style>
