<template>
  <div id="app">
    <Loader v-if="loading"/>
    <div class="wrapper-layout" v-else>
      <Header/>
      <main class="main-layout">
          <router-view></router-view>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader";

export default {
  name: 'App',
  components: {Loader, Header, Footer},
  data() {
    return {
      loading: true,
    }
  },
  async mounted() {
    // вызываем запросы к бд, чтобы сохранить данные в store
    await this.$store.dispatch('GET_PRODUCTS');
    await this.$store.dispatch('GET_CATEGORIES');
    this.loading = false
  }
}
</script>

<style>

</style>
