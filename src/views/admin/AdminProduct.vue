<template>
<div class="admin">
    <h1>Admin product</h1>
    <form action="#" @submit.prevent="submit" class="login__form">
        <div class="login__group">
            <label for="excel_products" class="login__label">Загрузить excel</label>
            <input type="file" name="excel_products" id="excel_products" ref="excel_products"
                   class="login__input" placeholder="Файл Excel" v-on:change="handleFileUpload()">
        </div>
        <div class="login__btns">
            <Button
                    btn-type="submit"
                    btn-text="Загрузить"
                    btn-class="login__button"
            />
        </div>
    </form>
</div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Button from "../../components/ui/Button";
  export default {
    name: "AdminProduct",
    components: {
      Button,
    },
    data () {
      return {
        products: null,
        errorMsg: false,
        // validateErrors: {},
      }
    },
    methods: {
      ...mapActions({
        import: 'admin_product/PRODUCTS_IMPORT'
      }),
      handleFileUpload(){
        this.products = this.$refs.excel_products.files[0];
      },
      async submit () {
        let formData = new FormData();
        formData.append('products', this.products);
        const response = await this.import(formData);
        console.log('after post', response);
      }
    },
  }
</script>

<style scoped>

</style>
