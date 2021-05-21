<template>
    <div class="container">
<!--        <Carousel
            :carousel-data="carouselData"
        />-->

        <PromoComponent/>

        <NewArrivalComponent/>

        <BenefitListComponent/>

        <PromotionsComponent/>

        <ReviewsComponent/>

        <FeedbackComponent/>
    </div>

</template>

<script>
import PromoComponent from "../components/home-components/PromoComponent";
import BenefitListComponent from "../components/home-components/BenefitListComponent";
import ReviewsComponent from "../components/home-components/ReviewsComponent";
import FeedbackComponent from "../components/home-components/FeedbackComponent";
import PromotionsComponent from "../components/home-components/PromotionsComponent";
import NewArrivalComponent from "../components/home-components/NewArrivalComponent";
// import Carousel from "../components/Carousel";
import ProductCardComponent from "../components/ProductCardComponent";


export default {
    name: "Home",
    components: {
        // Carousel,
        ProductCardComponent,
        NewArrivalComponent,
        PromotionsComponent,
        FeedbackComponent,
        ReviewsComponent,
        BenefitListComponent,
        PromoComponent,
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
