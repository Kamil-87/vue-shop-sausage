<template>
    <div class="profile">
        <success-message-component :message="'Данные успешно изменены'" v-show="successMsg"></success-message-component>
        <error-message-component :message="'Не удалось сохранить изменения'" v-show="errorMsg"></error-message-component>
        <h1 class="profile__title">Данные профиля</h1>
        <form action="#" @submit.prevent="submit" class="login__form">
            <div class="login__group">
                <label for="name" class="login__label">Имя</label>
                <input type="text" name="name" id="name" class="login__input" v-model="form.name" placeholder="Имя">
                <div class="login__validate">
                    <validate-message-component v-show="validateErrors.name" :messages="validateErrors.name"></validate-message-component>
                </div>
            </div>
            <div class="login__group">
                <label for="email" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input" v-model="form.email" placeholder="Email">
                <div class="login__validate">
                    <validate-message-component v-show="validateErrors.email" :messages="validateErrors.email"></validate-message-component>
                </div>
            </div>
            <div class="login__group login__group-phone">
                <label for="phone" class="login__label">Телефон</label>
                <span class="login-phone-7">+7</span>
                <input type="tel" name="phone" id="phone" class="login__input login__input-phone" v-model.number="form.phone" placeholder="9225663344">
                <div class="login__validate">
                    <validate-message-component v-show="validateErrors.phone" :messages="validateErrors.phone"></validate-message-component>
                </div>
            </div>
            <div class="login__checkPassword">
                <input type="checkbox" id="checkAddress" v-model="checkAddress">
                <label for="checkAddress">Указать адрес доставки</label>
            </div>
            <template v-if="checkAddress">
                <div class="login__group">
                    <label for="location" class="login__label">Населенный пункт</label>
                    <input type="text" name="location" list="locations" id="location" class="login__input" v-model="form.location" placeholder="Населенный пункт">
                    <datalist id="locations">
                        <option value="Чита"></option>
                        <option value="Чита2"></option>
                        <option value="Москва"></option>
                    </datalist>
                    <div class="login__validate">
                        <validate-message-component v-show="validateErrors.location" :messages="validateErrors.location"></validate-message-component>
                    </div>
                </div>
                <div class="login__group">
                    <label for="address" class="login__label">Адрес доставки</label>
                    <input type="text" name="address" id="address" class="login__input" v-model="form.address" placeholder="Адрес доставки">
                    <div class="login__validate">
                        <validate-message-component v-show="validateErrors.address" :messages="validateErrors.address"></validate-message-component>
                    </div>
                </div>
            </template>
            <div class="login__checkPassword">
                <input type="checkbox" id="checkPassword" v-model="checkPassword">
                <label for="checkPassword">Сменить пароль</label>
            </div>
            <template v-if="checkPassword">
                <div class="login__group">
                    <label for="oldPassword" class="login__label">Текущий пароль</label>
                    <input type="password" name="oldPassword" id="oldPassword" class="login__input" v-model="form.oldPassword" placeholder="Текущий пароль">
                    <div class="login__validate">
                        <validate-message-component v-show="validateErrors.oldPassword" :messages="validateErrors.oldPassword"></validate-message-component>
                    </div>
                </div>
                <div class="login__group">
                    <label for="newPassword" class="login__label">Новый пароль</label>
                    <input type="password" name="newPassword" id="newPassword" class="login__input" v-model="form.newPassword" placeholder="Новый пароль">
                    <div class="login__validate">
                        <validate-message-component v-show="validateErrors.newPassword" :messages="validateErrors.newPassword"></validate-message-component>
                    </div>
                </div>
                <div class="login__group">
                    <label for="newPassword_confirmation" class="login__label">Повторите новый пароль</label>
                    <input type="password" name="newPassword_confirmation" id="newPassword_confirmation" class="login__input" v-model="form.newPassword_confirmation" placeholder="Повторите новый пароль">
                </div>
            </template>
            <div class="login__btns">
                <Button
                    btn-type="submit"
                    btn-text="Сохранить изменения"
                    btn-class="login__button"
                />
            </div>
        </form>
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import ValidateMessageComponent from '../../components/ValidateMessageComponent'
  import ErrorMessageComponent from '../../components/ErrorMessageComponent'
  import SuccessMessageComponent from '../../components/SuccessMessageComponent'
  import Button from "../../components/ui/Button";
  export default {
    name: "Profile",
    components: {
        Button,
      ValidateMessageComponent, ErrorMessageComponent, SuccessMessageComponent
    },
    data () {
      return {
        form: {
          id: null,
          name: '',
          email: '',
          phone: null,
          address: '',
          location: '',
          oldPassword: '',
          newPassword: '',
          newPassword_confirmation: '',
        },
        checkPassword: false,
        checkAddress: false,
        successMsg: false,
        errorMsg: false,
        validateErrors: {},
      }
    },
    computed: {
      ...mapGetters({
        user: 'auth/USER',
      })
    },

    methods: {
      ...mapActions({
        update: 'auth/UPDATE',
      }),

      async submit () {
        const response = await this.update(this.form);
        if (response.status === 204) {
          this.successMsg = true;
          this.validateErrors = {};
          setTimeout(() => {this.successMsg = false}, 4000)
        }
        if (response.status === 422) {
          this.errorMsg = true;
          this.validateErrors = {...response.data.errors};
          setTimeout(() => {this.errorMsg = false}, 4000)
        }
        this.form.oldPassword = '';
        this.form.newPassword = '';
        this.form.newPassword_confirmation = '';
      }
    },
    created() {
      this.form.name = this.user.name;
      this.form.email = this.user.email;
      this.form.phone = this.user.phone;
      this.form.id = this.user.id;
    }
  }
</script>

<style lang="scss" scoped>

    .profile {
        width: 100%;
        position: relative;
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 10px;
        }
    }

</style>
