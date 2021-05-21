<template>
    <div class="admin">
        <h1>Admin product</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="name" class="login__label">Название категории</label>
                <input type="text" name="name" id="name" class="login__input" placeholder="Название категории" v-model="form.name">
            </div>
            <div class="login__group">
                <label for="slug" class="login__label">Название категории</label>
                <input type="text" name="slug" id="slug" class="login__input" placeholder="Слаг категории" v-model="form.slug">
            </div>
            <div class="login__group">
                <label for="sale" class="login__label">Название категории</label>
                <input type="number" name="sale" id="sale" class="login__input" placeholder="Скидка категории" v-model="form.sale">
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
  import Button from "../../components/ui/Button";
  export default {
    name: "AdminCategory",
    components: {
      Button,
    },
    data () {
      return {
        form: {
          name: '',
          slug: '',
          sale: 0,
        },
      }
    },
    methods: {
      async submit () {
        console.log(this.form);
      }
    },
  }
</script>

<style scoped>

</style>
