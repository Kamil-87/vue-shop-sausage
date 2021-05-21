<template>
    <div class="container order">
        <h1 class="order__title">Заказ №{{ ORDER_CURRENT.id }}</h1>

        <h3 class="order__subtitle">Информация о заказе</h3>

        <div class="order-info">
            <div class="order-row">
                <p class="order-info__title">Дата оформления</p>
                <p class="order-info__value">{{ this.order_date }}</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Сумма</p>
                <p class="order-info__value">{{ ORDER_CURRENT.total_price + ORDER_CURRENT.delivery_cost }}&nbsp;руб</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Способ доставки</p>
                <p class="order-info__value">{{ ORDER_CURRENT.delivery_method }}</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Адрес доставки</p>
                <p class="order-info__value">{{ ORDER_CURRENT.address }}</p>
            </div>

            <div class="order-row">
                <p class="order-info__title">Получатель</p>
                <p class="order-info__value">{{ ORDER_CURRENT.name }}&nbsp;+7{{ ORDER_CURRENT.phone }}</p>
            </div>

        </div>

        <h3 class="order__subtitle">Состав заказа</h3>

        <table class="table">
            <tbody>
            <tr class="table-row table-row__head">
                <td class="table-cell table-cell__head">Наименование</td>
                <td class="table-cell table-cell__head">Кол-во</td>
                <td class="table-cell table-cell__head">Стоимость</td>
            </tr>
            <tr class="table-row table-row__body" v-for="(item, index) in LAST_CART" :key="'item' + index">
                <td class="table-cell table-cell__body" data-title="Наименование">{{item.name}}</td>
                <td class="table-cell table-cell__body" data-title="Кол-во">{{ item.quantity }}</td>
                <td class="table-cell table-cell__body" data-title="Стоимость">{{ item.price }}&nbsp;руб</td>
            </tr>
            <tr class="table-row table-row__foot">
                <td class="table-cell table-cell__foot" colspan="3">Итого:&nbsp;<strong>{{ ORDER_CURRENT.total_price }}&nbsp;руб</strong></td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Order',
    data() {
      return {
        order_date: null,
        order_date_options: {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        }
      }
    },
    computed: {
      ...mapGetters([
        'ORDER_CURRENT', 'LAST_CART'
      ]),
    },
    created() {
      this.order_date = new Intl.DateTimeFormat('ru-Ru', this.order_date_options)
        .format(new Date(this.ORDER_CURRENT.updated_at));
    }
  }

</script>

<style lang="scss" scoped>

.order {
    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__subtitle {
        font-size: 2.8rem;
        margin-bottom: 1.5rem;
        font-weight: normal;
    }

    &-info {
        padding: 1rem 0 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        font-size: 1.6rem;

        &__title {
            flex: 0 0 160px;
            color: #747474;
        }

        &__value {
            color: $colorText;
        }
    }
}

.order-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;
}

.table {
    min-width: 100%;
    border-radius: 2px;
    border: 1px solid #cccccc;
    border-collapse: unset;
    border-spacing: 0;

    &-row {
        td:first-child {
            text-align: left;
        }
        td:nth-child(2) {
            text-align: center;
        }
        td:last-child {
            text-align: right;
        }
    }
}



.table-cell {
    text-align: left;
    line-height: 1.2;

    &__head {
        padding: 1rem;
        font-weight: normal;
        border-bottom: 1px solid #cccccc;
        color: #747474;
    }

    &__body {
        padding: 0.5rem 1rem;
        border-bottom: 1px solid #cccccc;
    }
    &__foot {
        padding: 1rem;
        text-align: right;
        border: none;
    }
}

</style>
