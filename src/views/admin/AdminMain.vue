<template>
    <div class="admin">
        <h1 class="admin__title">Админ панель сайта</h1>
        <p>Админ панель сайта!!!Здесь можно редактировать всё!</p>
    </div>
</template>

<script>
  import {mapGetters} from "vuex/dist/vuex.mjs";
  export default {
    name: "AdminMainPage",
    computed: {
      ...mapGetters({
        isAdmin: 'auth/ADMIN',
      })
    },
    mounted() {
      if (!this.isAdmin) {
        this.$router.push('/account');
      }
    }
  }
</script>

<style lang="scss" scoped>
    .admin {
        &__title {
             font-size: 34px;
             font-weight: 700;
             color: #333333;
             margin-bottom: 10px;
         }
    }
</style>
