<template>
    <div class="validate">
        <p class="validate__message" v-for="message in this.messages">{{ message }}</p>
    </div>
</template>

<script>
  export default {
    name: "ValidateMessageComponent",
    props: ['messages']
  }
</script>

<style lang="scss" scoped>
    .validate {
        &__message {
            color: #f10f0f;
            font-size: 18px;
        }
    }

</style>
