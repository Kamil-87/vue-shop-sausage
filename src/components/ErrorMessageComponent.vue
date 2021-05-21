<template>
    <div class="alert-msg-error">
        <p>{{ this.message }}</p>
    </div>
</template>

<script>
  export default {
    name: "ErrorMessageComponent",
    props: {
      message: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
    .alert-msg-error {
        position: fixed;
        top: 100px;
        right: 30px;
        background-color: #ad594b;
        padding: 20px;
        border-radius: 5px;
        font-weight: bold;
        color: #ffffff;
    }
</style>
