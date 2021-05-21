<template>
    <div class="new-arrival">
<!--        <Loader v-if="loading" />-->
        <div>
            <Notification
                v-if="messages.length"
                :messages="messages"
            />
            <div class="new-arrival__head">
                <h2 class="new-arrival__title">Новое поступление</h2>
                <div class="new-arrival__arrows">
                    <button @click="prevSlide" class="btn-prev" :class="{disabled: isDisabled}" :style="{background: 'url(\'@/assets/icons/arrow-left.svg\') 0 0 / 100% no-repeat'}">🠐</button>
                    <button @click="nextSlide" class="btn-next" >🠒</button>
                </div>
            </div>

            <VueSlickCarousel v-bind="newProductsSliderSettings" ref="slider">
                <ProductCardComponent
                    v-for="item in sliderItems"
                    :key="item.id"
                    :product-data="item"
                    :image-url="item.img ? require('@/assets/images/products/' + item.img) : require('@/assets/images/no_photo.png')"
                    @addToCart="addToCart"
                />
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import ProductCardComponent from "../ProductCard";
import {mapGetters, mapActions} from "vuex/dist/vuex.mjs";
import Loader from "../ui/Loader";
import SuccessMessageComponent from "../SuccessMessageComponent";
import Notification from "../ui/Notification";

export default {
    name: 'NewArrival',
    components: {Notification, SuccessMessageComponent, Loader, ProductCardComponent},
    data() {
        return {
            sliderItems: [
                {id: 1, name: 'Колбаса вареная Молочная', price: 150, unit: 'шт', img: 'Kolbasa_varennaya_Molochnaya.png'},
                {id: 2, name: 'Охотничие колбаски ГОСТ', price: 600, unit: 'шт', img: 'Ohotnich_kolbaski_GOST.png'},
                {id: 3, name: 'Полукопченная Армавирская ГОСТ', price: 500, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
                {id: 4, name: 'Полукопченные колбаски элитные', price: 600, unit: 'кг', img: 'Polukopchyonnye_kolbaski_Elitnye_3_sort.png'},
                {id: 5, name: 'Сосиски Кроха', price: 350, unit: 'шт', img: 'Sosiski_kroha.png'},
                {id: 6, name: 'Полукопченная Армавирская ГОСТ', price: 250, unit: 'шт', img: 'Polukopchyonnaya_Armavarskaya_GOST.png'},
                {id: 7, name: 'Cтаромосковская вареная копченая', price: 200, unit: 'шт', img: 'Staromoskovskaya_varyono_kopchyonnaya.png'},
            ],
            arrayProducts: [],
            newProductsSliderSettings: {
                arrows: false,
                slidesToShow: 4,
                infinite: false,
            },
            isDisabled: false,
            // loading: true,
            messages: [],
        }
    },
    computed: {
        imageUrl() {
            return `@/assets/images/products/`
        },
        ...mapGetters([
            'PRODUCTS', 'PRODUCTS_NEWS'
        ]),
        newProductList() {
            return this.PRODUCTS_NEWS
        }

    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS', 'ADD_TO_CART'
        ]),
        prevSlide() {
            this.$refs.slider.prev()
        },

        nextSlide() {
            this.$refs.slider.next()
        },
        addToCart(data) {
            this.ADD_TO_CART(data)
                .then(() => {
                    let timeStamp = Date.now().toLocaleString()
                    this.messages.unshift(
                        {name: 'Товар добавлен в корзину!', id: timeStamp}
                    )
                })
        },
    },
/*    created() {
        this.GET_PRODUCTS()
            .then(response => {
                if(response) {
                    console.log('Data arrived created')
                }
            })
    },*/
    async mounted() {
        // this.arrayProducts = [...this.PRODUCTS]
        console.log(this.arrayProducts)
        //продукты еще не пришли, изменить actions в Продуктах, потом все перенести в MainLayout
        //или VUEX?
        setTimeout(() => {
            this.loading = false
        }, 1000)
    }
}
</script>

<style lang="scss">

.new-arrival {
    margin-bottom: 3rem;
    width: 100%;
    text-align: center;

    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }


    .btn-prev, .btn-next {
        font-size: 0;
        line-height: 0;

        width: 30px;
        height: 40px;
        padding: 0;
    }

    .btn-prev + .btn-next {
        margin-left: 30px;
    }

    .disabled {
        opacity: .5;
        pointer-events: none;
    }
}


</style>
