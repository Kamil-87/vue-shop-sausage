<template>
    <footer>
        <div class="footer__top">
            <div class="footer__area-menu container">
                <div class="menu__item">
                    <p class="menu__title">О магазине</p>
                    <router-link to="/contacts" class="menu__link">Адреса магазинов</router-link>
                    <router-link to="/promotions" class="menu__link">Акции и скидки</router-link>
                    <router-link to="/" class="menu__link">Юридическим лицам</router-link>
                    <router-link to="/" class="menu__link">Как заказать</router-link>
                    <router-link to="/return-policy" class="menu__link">Обмен и возврат</router-link>
                </div>

                <div class="menu__item">
                    <p class="menu__title">Покупателям</p>
                    <router-link to="/account/history" class="menu__link">Личный кабинет</router-link>
                    <router-link to="/" class="menu__link">Мои заказы</router-link>
<!--                    <router-link to="/" class="menu__link">Вопросы и ответы</router-link>-->
                    <router-link to="/return-policy" class="menu__link">Политика возврата</router-link>
                </div>

                <div class="menu__item">
                    <p class="menu__title">Информация</p>
                    <router-link to="/offer" class="menu__link">Политика конфиденциальности и оферта</router-link>
                    <router-link to="/user-agreement" class="menu__link">Пользовательское соглашение</router-link>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            &copy;&nbsp;{{ date | date('year') }}&nbsp;Любое использование контента без письменного разрешения запрещено
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            date: new Date()
        }
    }
}
</script>

<style lang="scss" scoped>


.footer {
    &__top {
        margin-top: 3rem;
        background: #f7f7f7;
    }
    &__area-menu {
        padding-top: 3rem;
        padding-bottom: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__bottom {
        background: #ffffff;
        height: 5rem;
        color: $colorText;;
        text-align: center;
        line-height: 5rem;
    }
}

.menu {
    &__item {
        text-align: left;
        color: $colorText;
    }
    &__item + &__item {
        margin-left: 6rem;
    }

    &__title {
        font-weight: bold;
        margin-bottom: 1.5rem;
        font-size: 1.6rem;
    }

    &__link {
        display: block;
        color: $colorText;
        font-size: 1.4rem;

        &:hover {
            color: $colorBtn;
        }
    }
    &__link + &__link {
        margin-top: 1.5rem;
    }
}
</style>
