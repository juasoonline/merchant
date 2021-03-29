<template>

    <!-- Begin slider contents -->
    <section class="text-center">
        <swiper :slides-per-view="1" :speed="1000" :autoplay="{ autoplay: true, delay: 5000 }" :pagination="{ clickable: true }">
            <swiper-slide v-for="banner in AdBanners" :key="banner.resource_id">
                <div class="swiper-container"><img v-bind:src="banner.image" :alt="banner.desc"></div>
            </swiper-slide>
        </swiper>
    </section>
    <!-- End slider contents -->

</template>

<script>
    import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';

    SwiperCore.use( [ Navigation, Pagination, Autoplay ] );

    export default
    {
        name: "Sliders",
        components: { Swiper, SwiperSlide },
        data()
        {
            return {
              AdBanners:
              [
                  { resource_id: 10000000, image: "../assets/images/sliders/1.jpg", desc: "Something" },
                  { resource_id: 20000000, image: "../assets/images/sliders/2.jpg", desc: "Something" },
                  { resource_id: 30000000, image: "../assets/images/sliders/3.jpg", desc: "Something" },
              ],
            }
        },
    }
</script>

<style scoped>

</style>