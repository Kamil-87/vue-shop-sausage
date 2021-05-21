<template>
    <div class="container">

        <Breadcrumbs />

        <div class="catalog__top">
            <h1 class="catalog__title">{{ categoryName || 'Каталог' }}</h1>

            <div class="catalog__select">
                <select
                    class="select"
                    name="Сортировка"
                    v-model="sortType"
                    @click="sortItem()"
                >
                    <option
                        v-for="item in itemsSort"
                        :key="item.value"
                        :value="item.value"
                    >{{ item.title }}
                    </option>

                </select>

            </div>
        </div>

        <div class="flex-box">
            <aside class="catalog__aside aside">
                <h3 class="aside__title">Виды колбасы</h3>
                <ul class="aside__categories">
                    <li
                        class="category__list"
                        v-for="category in categoryList"
                        @click="sortByCategories(category)"
                    >
                        {{ category.name }}
                    </li>
                </ul>
            </aside>

            <main class="catalog__main">
                <PaginationCatalog
                    :catalogData="filterProducts"
                />
            </main>
        </div>
    </div>
</template>

<script>
import Select from "../components/ui/Select";
import InputCheck from "../components/ui/InputCheck";
import Button from "../components/ui/Button";
import ProductCardComponent from "../components/ProductCard";
import PaginationCatalog from "../components/catalog/PaginationCatalog";


import {mapGetters} from "vuex/dist/vuex.mjs";


export default {
    components: { PaginationCatalog, ProductCardComponent, Button, InputCheck, Select},

    props: {},

    data() {
        return {
            itemsSort: [
                {value: '', title: 'Сортировка'},
                {value: 'name', title: 'по названию'},
                {value: 'min_price', title: 'по убыванию цены'},
                {value: 'max_price', title: 'по возрастанию цены'},
                // {value: 'new_products', title: 'сначала новые'},
            ],
            sortedProducts: [],
            pageNumber: 0,
            sortType: '',
            categoryName: '',
        }
    },

    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CATEGORIES',
            'SEARCH_VALUE',
        ]),

        productList() {
            return this.PRODUCTS
        },
        categoryList() {
            return this.CATEGORIES
        },
        filterProducts() {
            if (this.sortedProducts.length) {
                return this.sortedProducts
            }
            return this.productList
        },

    },

    methods: {
        sortByCategories(category) {
            this.sortedProducts = []
            this.productList.map(item => {
                if (item.category_id === category.id) {
                    this.sortedProducts.push(item)
                }
            })
            this.categoryName = category.name
        },

        //сортировка по селекту
        sortItem() {
            if (this.sortType === 'name') {
                return this.filterProducts.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (this.sortType === 'min_price') {
                return this.filterProducts.sort((a, b) => a.price - b.price)
            }
            if (this.sortType === 'max_price') {
                return this.filterProducts.sort((a, b) => b.price - a.price)
            }

        },

        //сортировка по поиску
        sortProductsBySearchValue(value) {
            this.sortedProducts = [...this.PRODUCTS]
            if(value) {
                this.sortedProducts = this.sortedProducts.filter( item => item.name.toLowerCase().includes(value.toLowerCase()) )
            } else {
                console.log('по вашему запросу ничего не найдено')
            }
        }
    },
    watch: {
        SEARCH_VALUE() {
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
        }
    }
}
</script>

<style lang="scss" scoped>


.catalog {
    &__top {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 3rem;
        text-transform: capitalize;
    }
}

.select {
    display: block;
    font-size: 16px;
    color: $colorText;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%;
    margin: 0;
    border: 1px solid $grey;
    border-radius: 5px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    /*    background-image: url('../storage/icons/arrow-down.svg');*/
    background-repeat: no-repeat;
}

.flex-box {
    display: flex;
}

.catalog__aside {
    width: 300px;
    padding: 10px;
}

.aside__title {
    font-size: 20px;
    margin-bottom: 1.5rem;
}

.category {
    &__list {
        border-bottom: 1px solid $greyLight;
        text-transform: capitalize;
        display: block;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: $colorText;
        font-family: "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji";
        cursor: pointer;

        &:hover {
            color: $colorBtn;
        }
    }
}

.catalog__main {
    width: 100%;
    padding: 10px;
}


</style>
