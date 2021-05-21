<template>
    <div class="container">
        <h1 class="login__title">Вход в кабинет покупателя</h1>
        <error-message-component :message="'Логин или пароль неверные'" v-show="errorMsg"></error-message-component>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email" placeholder="Email">
                <div class="login__validate">
                    <validate-message-component v-show="validateErrors.email" :messages="validateErrors.email"></validate-message-component>
                </div>
            </div>
            <div class="login__group">
                <label for="password" class="login__label">Пароль</label>
                <input type="password" name="password" id="password" class="login__input" v-model="form.password" placeholder="Пароль">
                <div class="login__validate">
                    <validate-message-component v-show="validateErrors.password" :messages="validateErrors.password"></validate-message-component>
                </div>
            </div>
            <div class="login__btns">
                <Button
                    btn-type="submit"
                    btn-text="Войти"
                    btn-class="login__button"
                />
                <router-link to="/register" class="login__href">Регистрация</router-link>
                <router-link to="/register" class="login__href">Восстановить пароль</router-link>
            </div>
        </form>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ValidateMessageComponent from '../components/ValidateMessageComponent'
  import ErrorMessageComponent from '../components/ErrorMessageComponent'
  import Button from "../components/ui/Button";

  export default {
    name: "Login",
    components: {
        Button,
      ValidateMessageComponent, ErrorMessageComponent
    },
    data () {
      return {
        form: {
          email: '',
          password: '',
        },
        errorMsg: false,
        validateErrors: {},
      }
    },

    methods: {
      ...mapActions({
        signIn: 'auth/SIGN_IN'
      }),

      async submit () {
        const response = await this.signIn(this.form);
        if (response.status === 204) {
          this.$router.push('/');
        }
        if (response.status === 422) {
          this.errorMsg = true;
          this.validateErrors = {...response.data.errors};
          setTimeout(() => {this.errorMsg = false}, 4000)
        } else {
          this.errorMsg = true;
          setTimeout(() => {this.errorMsg = false}, 4000)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
    //@import "../../sass/login-register";
</style>
