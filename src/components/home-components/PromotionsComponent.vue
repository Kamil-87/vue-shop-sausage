<template>
    <section class="promotions">
        <h2 class="promotions__title">Акции</h2>
        <div class="promotions__box">
            <article v-for="item in 4">
                <a href="#" class="promotions__img">
                    <img src="/images/products/Polukopchyonnaya_Armavarskaya_GOST.png"
                         alt="Полукопчённая Армаварская ГОСТ">
                </a>
                <div>
                    <h4>
                        <a href="#">Скидка на Полукопчённая Армаварская ГОСТ</a>
                    </h4>
                    <!--                    <p class="promotions__date-range">c 10.04.2021 по 10.05.2021</p>-->
                    <p class="promotions__date">10.04.2021</p>
                </div>
            </article>

        </div>
    </section>
</template>

<script>
export default {
    name: 'PromotionsComponent',

}
</script>

<style lang="scss" scoped>

.promotions {
    padding-bottom: 3rem;

    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__box {
        display: flex;
        align-items: flex-start;
        grid-gap: 3rem;
    }

    &__img {
        display: block;
        margin-bottom: 1.5rem;

        & img {
            width: 100%;
        }
    }
}

article {
    max-width: 400px;
    min-width: 250px;
    font-size: 1.6rem;
    color: $colorText;

    & h4 {
        margin-bottom: 15px;
        font-size: 1.8rem;
        & a {
            color: $colorText;
            &:hover {
                color: $colorBtn;
            }
        }
    }

    &__date {

    }
}

</style>
