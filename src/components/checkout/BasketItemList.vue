<template>
    <div>
        <div class="basket-item__list">
            <div
                class="basket-item"
                v-for="(item, index) in CART"
                :key="'item' + index"
            >
                <div class="basket-item__img">
                    <img :src="`/images/products/${item.img}`" :alt="item.name">
                </div>
                <p class="basket-item__name">{{ item.name }}</p>
                <p class="basket-item__price">{{ item.quantity }}&nbsp;х&nbsp;<span>{{ item.price }}&nbsp;руб</span></p>
            </div>
        </div>

        <div class="basket-item__info">
            <p>Сумма по товарам</p>
            <p><strong>{{ TOTAL_PRICE_CART }}&nbsp;руб</strong></p>
        </div>

        <div class="basket-item__info">
            <p>Стоимость доставки</p>
            <p><strong>{{ 1000 }}&nbsp;руб</strong></p>
        </div>

        <hr>

        <div class="basket-item__info basket-item__info_total">
            <p>Итого:</p>
            <p><strong>{{ TOTAL_PRICE_CART + 1000 }}&nbsp;руб</strong></p>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex/dist/vuex.mjs";

export default {
    name: 'BasketItemList',
    computed: {
        ...mapGetters([
            'CART', 'TOTAL_PRICE_CART'
        ])
    }
}
</script>

<style lang="scss" scoped>


.basket-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $greyLight;
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    &__img {
        margin-right: 3rem;

        img {
            width: 75px;
        }
    }

    &__text {
        display: flex;
        align-items: flex-end;
        color: #333333;
    }

    &__name {
        line-height: 24px;
        margin-right: 3rem;
    }

    &__price {
        margin-left: auto;

        span {
            font-size: 24px;
            line-height: 24px;
            font-weight: bold;
        }
    }
}

.basket-item__list {
    width: 450px;
}

.basket-item__info {
    display: flex;
    justify-content: space-between;

    p {
        margin-bottom: 1.5rem;

        & > strong {
            font-size: 24px;
            line-height: 24px;
        }
    }
    &_total {
        p {
            margin-top: 1.5rem;
            font-size: 24px;
            line-height: 24px;

            & > strong {
                font-size: 28px;
                line-height: 28px;
            }
        }
    }

}


hr {
    border-bottom: 1px solid $greyLight;
}
</style>
