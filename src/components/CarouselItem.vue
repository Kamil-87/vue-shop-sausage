<template>
    <div class="carousel-item">
        <img :src="itemData.img" :alt="itemData.name">
        <h2>{{itemData.name}}</h2>
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    props: {
        itemData: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
img {
    width: 300px;
}
</style>
