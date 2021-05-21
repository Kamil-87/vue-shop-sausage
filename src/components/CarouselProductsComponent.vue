<template>
<section class="container">
    <h2 class="title">{{ title }}</h2>
    <hooper :settings="hooperSettings">
<!--        TODO вынести slide в отдельный компонент-->
        <slide v-for="product in productList" :key="product.id">
            <div class="product">
                <img class="product__img" style="width: 100%" :src="'storage/images/products/' + product.img" alt="product">

                <div class="product__text">
                    <a class="product__title" href="#">{{product.name}}, {{product.count}}</a>
                    <p class="product__price">{{product.price}}</p>
                </div>
                <div class="product__btn">
                    <button>В корзину</button>
                </div>
            </div>
        </slide>
        <hooper-navigation slot="hooper-addons" class="slider-arrow">
            <svg slot="hooper-prev" class="icon icon-arrowLeft" viewBox="0 0 24 24" width="50px" height="50px">
                <title>Arrow Left</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>

            <svg slot="hooper-next" class="icon icon-arrowRight" viewBox="0 0 24 24" width="50px" height="50px">
                <title>Arrow Right</title>
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
        </hooper-navigation>
    </hooper>
</section>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation} from "hooper";
  import 'hooper/dist/hooper.css';
  export default {
    // TODO описать пропсы, добавить возможные значения flag (акция, новинки, рекомендованые)
    props: {
      title: {
        type: String,
        required: true,
      },
      flag: {
        // флаг принимает значения news - товары новинки или sale - товары со скидкой
        type: String,
        required: true,
      }
    },
    name: "CarouselProductsComponent",
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    data() {
      return {
        hooperSettings: {
          infiniteScroll: true,
          centerMode: true,
          autoPlay: false,
          playSpeed: 3500,
          wheelControl: false,
          breakpoints: {
            1400: {
              itemsToShow: 6
            },
            1100: {
              itemsToShow: 5
            },

            720: {
              itemsToShow: 4
            },
            550: {
              itemsToShow: 3
            },
            400: {
              itemsToShow: 2
            },
            0: {
              itemsToShow: 1
            }
          }
        },
        products: [],
      }
    },

    computed: {
      productList() {
        if (this.flag === 'news') {
          return this.$store.getters.PRODUCTS_NEWS;
        }
        if (this.flag === 'sale') {
          return this.$store.getters.PRODUCTS_SALE;
        }
      }
    },
  }
</script>


<style lang="scss" scoped>
    /*TODO импортировать scss переменные глобально*/

    .product {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin: 0 15px;
        border: solid 2px #8e8787;
        max-width: 230px;
        padding: 6px 5px 8px 5px;
        &__text {
            display: flex;
            flex-direction: column;
            padding: 0 0 5px 10px;
        }
        &__title {
            font-size: 16px;
            margin: 0;
        }
        &__price {
            font-size: 28px;
            font-weight: 600;
        }
        &__btn button {
            border: solid 1px #eeeeee;
            font-size: 16px;
            cursor: pointer;
            color: #ffffff;
            background-color: $colorBtn;
            width: 100%;
            padding: 10px 0;
            border-radius: 10px;
        }
    }
    .hooper {
        height: auto;
        max-height: 367px;
        &-slide {
            width: 230px;
        }
    }
    .title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }
    .container {
        margin: 20px 0;
    }
</style>
