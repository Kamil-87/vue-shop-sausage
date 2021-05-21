<template>
    <div class="total">
        <div class="total__price">
            <span>Итого</span>
            <span>{{ TOTAL_PRICE_CART }}&nbsp;руб</span>
        </div>
        <router-link
            class="total__btn"
            to="/checkout"
        >Оформить заказ</router-link>
    </div>
</template>

<script>
import Button from "../ui/Button";
import {mapGetters} from "vuex";

export default {
    name: 'CartControl',
    components: {Button},

    computed: {
        ...mapGetters([
           'TOTAL_PRICE_CART'
        ]),
    }
}
</script>

<style lang="scss" scoped>


.total {
    padding: 20px 25px;
    background: $greyLight;
    border-radius: 5px;
    width: 300px;

    &__price {
        color: $colorText;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
    }

    &__btn {
        height: 50px;
        min-width: 250px;
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
}
</style>
