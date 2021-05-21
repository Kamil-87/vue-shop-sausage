<template>
    <div>
        <div class="product">
            <router-link
                :to="{name: 'product', params: { id: productData.id } }"
                class="product__img"
            >
                <img :src="imageUrl" :alt="productData.name">
            </router-link>
            <div class="product__text">
                <router-link :to="{name: 'product', params: { id: productData.id } }" class="product__title">{{ productData.name }}, 1 {{ productData.unit }}</router-link>
                <p class="product__price">{{ productData.price }} руб.</p>
            </div>
            <div class="product__btn">
                <button
                        @click="addToCart"
                >В корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCardComponent',
    props: {
        productData: {
            type: Object,
            default: () => {
                return {}
            }
        },
        imageUrl: {
            type: String
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.productData)
        }
    },
}
</script>

<style lang="scss" scoped>


.product {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid $greyLight;
    max-width: 230px;
    min-width: 180px;
    height: 350px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        //padding: 10px;
    }

    &__img {
        display: block;
        height: 180px;
        margin-bottom: 1.5rem;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &__text {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
    }

    &__title {
        font-size: 16px;
        color: $colorText;

        &:hover {
            color: $colorBtn;
        }
    }

    &__price {
        font-size: 2.4rem;
        font-weight: bold;
    }

    &__btn {
        padding: 10px;

        button {
            font-size: 16px;
            cursor: pointer;
            color: #ffffff;
            background-color: $colorBtn;
            width: 100%;
            padding: 10px;
            border-radius: 5px;
        }
    }

}

</style>
