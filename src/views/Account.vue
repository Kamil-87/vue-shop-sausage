<template>
    <div class="container account">
        <nav class="account__menu">
            <ul>
                <li class="account__li"><router-link to="/account/history" class="account__link">История заказов</router-link></li>
                <li class="account__li"><router-link to="/account/profile" class="account__link">Мои данные</router-link></li>
                <template v-if="isAdmin">
                    <li class="account__li"><router-link to="/account/admin" class="account__link">Админ панель</router-link></li>
                    <li class="account__li"><router-link to="/account/admin/product" class="account__link">Админ продукты</router-link></li>
                    <li class="account__li"><router-link to="/account/admin/category" class="account__link">Админ категории</router-link></li>
                </template>
                <li class="account__li"><a href="#" @click.prevent="signOut" class="account__link">Выйти</a></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex/dist/vuex.mjs";
  export default {
    name: "Account",

    computed: {
      ...mapGetters({
        authenticated: 'auth/AUTHENTICATED',
        isAdmin: 'auth/ADMIN',
      })
    },

    methods: {
      ...mapActions({
        signOutAction: 'auth/SIGN_OUT'
      }),

      async signOut () {
        await this.signOutAction();

        await this.$router.push('/');
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .account{
        margin-top: 20px;
        display: flex;
        &__menu {
            margin-right: 40px;
            & ul {
                display: flex;
                flex-direction: column;
            }
        }
        &__li {
            margin-bottom: 15px;
        }
        &__li:last-child {
            margin-bottom: 0;
        }
        &__link {
            color: #1f7d63;
            font-size: 18px;
            font-weight: 400;
            text-decoration: underline;
        }
        &__link:hover {
            text-decoration: none;
        }
    }
</style>
