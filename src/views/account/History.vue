<template>
    <div class="history">
        <h1 class="history__title">История заказов</h1>
        <p>У вас нет не одного заказа</p>
    </div>
</template>

<script>
  export default {
    name: "History"
  }
</script>

<style lang="scss" scoped>
    .history {
        &__title {
            font-size: 34px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 10px;
        }
    }

</style>
