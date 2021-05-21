<template>
    <section class="feedback">
        <h2 class="feedback__title">Обратная связь</h2>

        <form method="post" class="feedback__form" @submit.prevent="submitHandler">

            <div class="feedback__fields">
                <div class="feedback__field feedback__inputs">
                    <div class="feedback__name feedback__input">
                        <input
                            name="name"
                            type="text"
                            placeholder="Имя*"
                            class="form-control"
                            v-model="userName"
                            :class="{invalid: ($v.userName.$dirty && !$v.userName.required) || ($v.userName.$dirty && !$v.userName.minLength) }"
                        >
                        <div
                            class="feedback__error"
                            v-if="$v.userName.$dirty && !$v.userName.required"
                        >Поле не должно быть пустым
                        </div>
                        <div
                            class="feedback__error"
                            v-else-if="$v.userName.$dirty && !$v.userName.minLength"
                        >Введите корректный email
                        </div>

                    </div>
                    <div class="feedback__mail feedback__input">
                        <input
                            name="email"
                            type="text"
                            placeholder="Ваша почта*"
                            class="form-control"
                            v-model.trim="email"
                            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }"
                        >

                        <div
                            class="feedback__error"
                            v-if="$v.email.$dirty && !$v.email.required"
                        >Поле не должно быть пустым
                        </div>
                        <div
                            class="feedback__error"
                            v-else-if="$v.email.$dirty && !$v.email.email"
                        >Введите корректный email
                        </div>
                    </div>
                </div>

                <div class="feedback__field feedback__text">
                <InputTextarea
                    name="message-feedback"
                    placeholder="Ваш вопрос, отзыв или пожелание*"
                    :classTextarea="'form-item'"
                    :uniq="'message-feedback'"
                    :resize="false"
                    :greyBackground="true"
                    :error="errorsFeedback.messageFeedback"
                    v-model="messageFeedback"
                />

                </div>

                <InputCheck
                    labelText="Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *"
                    :labelClass="'agree__label'"
                    :error="errorsFeedback.agreeWithRules"
                    v-model="agreeWithRules"
                />
            </div>

            <div class="feedback__submit">
                <Button
                    :btn-type="'submit'"
                    :btnText="'Отправить'"
                    :btn-class="'feedback__btn'"
                />
            </div>
        </form>
    </section>
</template>

<script>
import InputCheck from "../ui/InputCheck";
import Button from "../ui/Button";
import InputTextarea from "../ui/InputTextarea";

import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'


export default {
    name: 'FeedbackComponent',
    components: {InputTextarea, Button, InputCheck},
    data() {
        return ({
            userName: '',
            email: '',
            messageFeedback: '',
            agreeWithRules: false,
            errorsFeedback: {
                userName: '',
                email: '',
                messageFeedback: '',
                agreeWithRules: null
            }
        })
    },
    validations: {
        userName: {minLength: minLength(5), required},
        email: {email, required},
        messageFeedback: {maxLength: maxLength(2048), required},
        agreeWithRules: {
            mustBeTrue(value) {
                return value
            }
        },
    },
    methods: {
        formIsValid() {
            let isValid = true

            this.errorsFeedback = {
                userName: '',
                email: '',
                messageFeedback: '',
                agreeWithRules: null
            }

            this.$v.$touch()

            if (this.$v.$error) {
                isValid = false
            }

            if (!this.$v.messageFeedback.required) {
                this.messageFeedback.required = "Поле не должно быть пустым";
                isValid = false
            }

            if (!this.$v.agreeWithRules.mustBeTrue) {
                this.errorsFeedback.agreeWithRules = "Необходимо подтвердить согласие";
                isValid = false
            }

            return isValid
        },
        submitHandler() {
            if (this.formIsValid()) {
                const formData = {
                    userName: this.userName,
                    email: this.email,
                    messageFeedback: this.messageFeedback,
                    agreeWithRules: this.agreeWithRules
                }
                console.log(formData)
            }

        }
    }

}
</script>

<style lang="scss" scoped>


.feedback {
    padding-bottom: 3rem;
    text-align: center;
    max-width: 680px;
    margin: 0 auto;

    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__error {
        color: red;
    }
}

.feedback__field {
    margin-bottom: 2rem;
    text-align: left;
    position: relative;

    & input {
        background: #f7f7f7;
        width: 100%;
        border-radius: 5px;
        font-size: 16px;
        padding: 6px 10px;
    }

    & textarea {
        height: 115px;
        resize: none;
    }
}

.form-item {
    margin-bottom: 2rem;
    text-align: left;
    position: relative;

    & input, textarea {
        background: #f7f7f7;
        width: 100%;
        border-radius: 5px;
        font-size: 16px;
        padding: 6px 10px;
    }

    & textarea {
        height: 115px;
    }
}

.feedback__inputs {
    display: flex;
    column-gap: 2rem;
}

.feedback__input {
    min-width: 250px;
    flex-grow: 1;

}

.feedback__btn {
    height: 50px;
}

.agree__label {

}
</style>
