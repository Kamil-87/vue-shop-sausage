<template>
 <div class="promo-slider">
     <VueSlickCarousel :arrows="true" :dots="true">
        <div><img src="http://dummyimage.com/1200x450/99cccc.gif&text=Первый+слайд!" alt="" /></div>
        <div><img src="http://dummyimage.com/1200x450/99ccee.gif&text=Второй+слайд!" alt="" /></div>
        <div><img src="http://dummyimage.com/1200x450/99cc99.gif&text=Третий+слайд!" alt="" /></div>
     </VueSlickCarousel>
 </div>
</template>

<script>

  export default {
    name: 'PromoComponent',
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss">
.promo-slider {
    margin-bottom: 3rem;
}



</style>
