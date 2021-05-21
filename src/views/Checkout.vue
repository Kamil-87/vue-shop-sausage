<template>
    <div class="container checkout">
        <h1 class="checkout__title">Оформление заказа</h1>
        <loader v-show="loading"></loader>

        <div class="checkout__box">
            <form class="checkout__form" @submit.prevent="submitHandler">
                <div class="checkout-block">
                    <h2 class="form__title">Контактные данные</h2>

                    <InputText
                        :label="'Контактное лицо (ФИО)'"
                        :uniq="'client_name'"
                        :required-field="true"
                        :error="errors.userName"
                        v-model.trim="userName"
                    />

                    <InputPhone
                        :label="'Контактный телефон'"
                        :uniq="'client_tel'"
                        :required-field="true"
                        :error="errors.userNumberPhone"
                        :placeholder="'9145220980'"
                        v-model="userNumberPhone"
                    />
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Доставка</h3>

                    <InputText
                        :label="'Населенный пункт'"
                        :uniq="'client_address'"
                        placeholder="Челябинская область, г. Магнитогорск, ул. Полевая, д.0"
                        :required-field="true"
                        :error="errors.deliveryAddress"
                        v-model.trim="deliveryAddress"
                    />

                    <div class="form-item">
                        <input
                            type="radio"
                            class="form-radio"
                            name="delivery"
                            id="pickup"
                            value="самовывоз"
                            v-model="deliveryMethod"
                        />
                        <label
                            class="form-radio-label"
                            for="pickup"
                        >
                            Самовывоз
                        </label>
                    </div>
                    <div class="form-item">
                        <input
                            type="radio"
                            class="form-radio"
                            name="delivery"
                            id="deliveryByCourier"
                            value="курьер"
                            v-model="deliveryMethod"
                            :required-field="true"
                            :error="errors.deliveryMethod"
                        />
                        <label
                            class="form-radio-label"
                            for="deliveryByCourier"
                        >
                            Курьером
                        </label>
                    </div>

                    <InputTextarea
                        :label="'Комментарии к заказу'"
                        :resize="false"
                        :form-input="true"
                        :uniq="'comment'"
                        v-model.trim="deliveryText"
                        :error="errors.deliveryText"
                    />

                    <InputText
                            label="Email"
                            :uniq="'client-email'"
                            :form-input="true"
                            :error="errors.email"
                            v-model.trim="email"
                    />
                </div>

                <div class="checkout-block">
                    <h3 class="form__title">Способ оплаты</h3>
                    <p>Оплата производится наличными или по карте курьеру</p>
                </div>

                <Button
                    type="submit"
                    btn-class="form__btn"
                    btn-text="Подтвердить заказ"
                />

            </form>

           <BasketItemList/>
        </div>

    </div>
</template>

<script>
import InputText from "../components/ui/InputText"
import InputNumber from "../components/ui/InputNumber"
import InputTextarea from "../components/ui/InputTextarea"
import InputEmail from "../components/ui/InputEmail"
import InputCheck from "../components/ui/InputCheck"
import InputRadio from "../components/ui/InputRadio"
import InputPhone from "../components/ui/InputPhone"
import Button from "../components/ui/Button"
import Loader from "../components/ui/Loader"

import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
import InputPassword from "../components/ui/InputPassword";
import BasketItemList from "../components/checkout/BasketItemList";
import { mapGetters } from 'vuex'

export default {
    components: {
        BasketItemList, Loader,
        InputPassword, Button, InputRadio, InputCheck, InputEmail, InputTextarea, InputNumber, InputText, InputPhone},
    data() {
        return {
          userName: '',
          userNumberPhone: '',
          deliveryAddress: '',
          deliveryMethod: 'самовывоз',
          deliveryText: '',
          email: '',
          errors: {
            userName: '',
            userNumberPhone: '',
            deliveryAddress: '',
            email: '',
            deliveryMethod: '',
            deliveryText: '',
          },
          loading: false,

        }
    },
    validations: {
      userName: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(35),
      },
      userNumberPhone: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(35),
      },
      deliveryAddress: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(150),
      },
      email: {
        email
      },
      deliveryMethod: {
          required,
      },
      deliveryText: {
        maxLength: maxLength(300),
      }
    },

  computed: {
    ...mapGetters([
      'CART',
    ]),
    ...mapGetters({
      authenticated: 'auth/AUTHENTICATED',
      user: 'auth/USER',
    })
  },

  methods: {

    formIsValid() {
      // TODO нужно поправить регулярку с учетом того что +7 не нужно и вызвать её в валидации
      const regNumPhone = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)
      let isValid = true;

      this.errors = {
        userName: '',
        userNumberPhone: '',
        deliveryAddress: '',
        email: '',
        deliveryMethod: '',
        deliveryText: '',
      };

      if (!this.$v.userName.minLength || !this.$v.userName.maxLength) {
        this.errors.userName = "Количество символов (min 5 max 35)";
        isValid = false
      }

      if (!this.$v.userName.required) {
        this.errors.userName = "Поле не может быть пустым";
        isValid = false
      }

      if (!this.$v.userNumberPhone.required) {
        this.errors.userNumberPhone = "Поле не может быть пустым";
        isValid = false
      }

      if (!this.$v.userNumberPhone.minLength || !this.$v.userNumberPhone.maxLength) {
        this.errors.userNumberPhone = "Введите номер в формате +7900123456";
        isValid = false
      }

      if (!this.$v.deliveryAddress.required) {
        this.errors.deliveryAddress = "Поле не может быть пустым";
        isValid = false
      }

      if (!this.$v.deliveryMethod.required) {
        this.errors.deliveryMethod = "Выберите способ доставки";
        isValid = false
      }

      if (!this.$v.email.email) {
        this.errors.email = "Заполните коректный email";
        isValid = false
      }

      if (!this.$v.deliveryText.maxLength) {
        this.errors.deliveryText = "Максимум 300 символов";
        isValid = false
      }

      return isValid
    },

    submitHandler() {
      console.log('start');
      if (this.formIsValid()) {
        console.group('Form Data');
        console.log('Name:', this.userName);
        console.log('Number:', this.userNumberPhone);
        console.log('Address:', this.deliveryAddress);
        console.log('deliveryMethod:', this.deliveryMethod);
        console.log('deliveryText:', this.deliveryText);
        console.log('email:', this.email);
        console.groupEnd()
        this.handleCreateOrder();
      }
      console.log('no');
    },

    async handleCreateOrder() {
      this.loading = true;
      const basketResponse = await this.$store.dispatch('API_ADD_CART', this.CART);
      if (basketResponse.status === 204) {

        const order = {
          name: this.userName,
          phone: this.userNumberPhone,
          email: this.email,
          address: this.deliveryAddress,
          comment: this.deliveryText,
          delivery_method: this.deliveryMethod,
          delivery_cost: 1000,
        };
        const orderResponse = await this.$store.dispatch('API_ADD_ORDER', order);
        if (orderResponse.status === 201) {
          console.log('Заказ добавился в бд. Нужно как то сказать об этом юзеру');
          console.log('Нужно скинуть корзину в local storage');
          await this.$store.dispatch('CLEAR_CART');
          await this.$router.push('/order');
        } else {
          console.log('Ошибка. Не удалось добавить заказ в бд!', orderResponse.status);
        }

      } else {
        console.log('Ошибка. Не удалось добавить корзину в бд!');
      }
      this.loading = false;
    },


  },

  mounted() {
      if (this.authenticated) {
        this.userName = this.user.name;
        this.userNumberPhone = String(this.user.phone);
        this.deliveryAddress = this.user.location + ', ' + this.user.address;
        this.email = this.user.email;
      }
  }
}
</script>

<style lang="scss" scoped>


.checkout {
    position: relative;
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__box {
        display: flex;
        align-items: flex-start;
    }

    &__form {
        flex-grow: 1;
        margin-right: 3rem;
    }
}

//form

.form {
    &__title {
        font-size: 24px;
        margin-bottom: 1.5rem;
    }

    &__btn {
        height: 40px;
        width: 100%;
        margin-top: 1.5rem;
    }
}

.regular-client {
    margin-bottom: 1.5rem;
}
</style>

