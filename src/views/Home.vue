<template>
    <div class="container">
<!--        <Carousel
            :carousel-data="carouselData"
        />-->

        <Promo />

        <NewArrival />

        <BenefitList />

        <Promotions />

        <Reviews />

        <Feedback />
    </div>

</template>

<script>
import Promo from "../components/home/Promo";
import BenefitList from "../components/home/BenefitList";
import Reviews from "../components/home/Reviews";
import Feedback from "../components/home/Feedback";
import Promotions from "../components/home/Promotions";
import NewArrival from "../components/home/NewArrival";
// import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";


export default {
    name: "Home",
    components: {
        // Carousel,
        ProductCard,
        NewArrival,
        Promotions,
        Feedback,
        Reviews,
        BenefitList,
        Promo,
    },
    data() {
        return {
            carouselData: [
                {id: 1, name: 'Первый слайд', img: 'http://dummyimage.com/1200x450/99cccc.gif&text=Первый+слайд!'},
                {id: 2, name: 'Второй слайд', img: 'http://dummyimage.com/1200x450/99ccee.gif&text=Второй+слайд!'},
                {id: 3, name: 'Третий слайд', img: 'http://dummyimage.com/1200x450/99cc99.gif&text=Третий+слайд!'}
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
