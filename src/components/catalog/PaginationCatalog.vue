<template>
    <div>
        <Notification
            :messages="messages"
        />

        <div class="catalog">
            <ProductCardComponent
                v-for="item in paginatedData"
                :key="item.id"
                :imageUrl="item.img ? require(`@/assets/images/products/${item.img}` ) : require('@/assets/images/no_photo.png')"
                :product-data="item"
                @addToCart="addToCart(item)"
            />
        </div>
        <div class="pagination" v-if="catalogData.length > usersPerPage">
            <button
                class="pagination__btn"
                :disabled="pageNumber === 1"
                @click="prevPage"
            >Предыдущая</button>
            <div class="page__box">
                <div
                    class="page"
                    v-for="page in pages"
                    :key="page"
                    :class="{'page__selected': page === pageNumber}"
                    @click="pageClick(page)"
                >
                    {{page}}
                </div>
            </div>
            <button
                class="pagination__btn"
                @click="nextPage"
            >Следующая</button>
        </div>
    </div>
</template>

<script>
import ProductCardComponent from "../ProductCard";
import { mapActions } from "vuex/dist/vuex.mjs";
import SuccessMessageComponent from "../SuccessMessageComponent";
import Notification from "../ui/Notification";

export default {
    name: 'PaginationCatalog',
    components: {Notification, SuccessMessageComponent, ProductCardComponent},
    props: {
        catalogData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            usersPerPage: 9,
            pageNumber: 1,
            messages: []
        }
    },
    computed: {
        imageUrl() {
            return `@/assets/images/products/`
        },
        pages() {
            return Math.ceil(this.catalogData.length / 9)
        },
        paginatedData() {
            const start = (this.pageNumber - 1) * this.usersPerPage
            const end = start + this.usersPerPage
            return this.catalogData.slice(start, end);
        }
    },
    methods: {
        ...mapActions([
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
            .then(() => {
                let timeStamp = Date.now().toLocaleString()
                this.messages.unshift(
                    {name: 'Товар добавлен в корзину!', id: timeStamp}
                )
            })
        },
        pageClick(page) {
            this.pageNumber = page
        },
        prevPage() {
           if (this.pageNumber > 1) {
               this.pageNumber--
           }
        },
        nextPage() {
            if (this.pageNumber <= this.pages - 1) {
                this.pageNumber++
            }

        }
    }

}
</script>

<style lang="scss" scoped>

.catalog {
    display: flex;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 3rem;
}
.pagination {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    .page {
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        color: $colorText;
        border-radius: 5px;


        &:hover {
            background-color: lighten($colorBtn, 10%);
            cursor: pointer;
            color: #ffffff;
        }

        &__box {
            margin-left: 3rem;
            margin-right: 3rem;
            display: flex;
            align-items: center;
        }
    }

    .page + .page {
        margin-left: 5px;
    }
}
.pagination__btn {
    background: $greyLight;
    color: $colorBtn;
    padding: 12px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-weight: bold;

    &:hover {
        border: 1px solid $colorBtn;
    }
    &:active {
        background: lighten($greyLight, 10%);
    }
}

.page__selected {
    background-color: $colorBtn;
    color: #ffffff !important;
}


</style>
