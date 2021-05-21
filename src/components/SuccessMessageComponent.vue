<template>
    <div class="alert-msg">
        <p>{{ this.message }}</p>
    </div>
</template>

<script>
  export default {
    name: "SuccessMessageComponent",
    props: {
      message: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
    .alert-msg {
        position: fixed;
        z-index: 1000;
        top: 175px;
        right: 30px;
        background-color: #8ec983;
        padding: 20px;
        border-radius: 5px;
        font-weight: bold;
        color: #ffffff;
    }
</style>
