<template>
    <div class="wrapper">
        <div
            class="carousel"
            :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%'}"
        >
            <CarouselItem
                v-for="item in carouselData"
                :key="item.id"
                :item-data="item"

            />
        </div>
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
    </div>
</template>

<script>

import CarouselItem from "./CarouselItem";

export default {
    name: 'Carousel',
    components: {
        CarouselItem,
    },
    props: {
        carouselData: {
            type: Array,
            default: () => []
        },
        interval: {
            type: Number,
        }
    },
    data() {
      return ({
          currentSlideIndex: 0
      })
    },
    methods: {
        prevSlide() {
          if(this.currentSlideIndex > 0) {
              this.currentSlideIndex--
          }
        },
        nextSlide() {
            if(this.currentSlideIndex >= this.carouselData.length - 1) {
                this.currentSlideIndex = 0
            }
            this.currentSlideIndex++
        }
    },
    mounted() {
        if(this.interval > 0 ) {
            setInterval( () => {
                this.nextSlide()
            }, this.interval )
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto;
}
.carousel {
    display: flex;
    transition: all ease .5s;
}
</style>
