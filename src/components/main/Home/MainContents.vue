<template>

    <!-- Begin slider section -->
    <sliders></sliders>
    <!-- End slider section -->

    <!-- Begin welcome section -->
    <welcome-message></welcome-message>
    <!-- End welcome section -->

    <!-- Begin customer testimony section -->
    <customer-testimony></customer-testimony>
    <!-- Begin customer testimony section -->

    <!-- Begin business testimonials section -->
    <business-testimonials></business-testimonials>
    <!-- End business testimonials section -->

    <!-- Begin seller info section -->
    <seller-info></seller-info>
    <!-- End seller info section -->

</template>

<script>
    import Sliders from "@/components/main/Home/Sliders";
    import WelcomeMessage from "@/components/main/Home/WelcomeMessage";
    import CustomerTestimony from "@/components/main/Home/CustomerTestimony";
    import BusinessTestimonials from "@/components/main/Home/BusinessTestimonials";
    import SellerInfo from "@/components/main/Home/SellerInfo";

    export default
    {
        name: "MainContents",
        components: { Sliders, WelcomeMessage, CustomerTestimony, BusinessTestimonials, SellerInfo }
    }
</script>

<style scoped>
</style>