<template>

    <!-- Begin page contents -->
    <div class="bg-gray-200 h-screen">
        <div class="flex grid-cols-2">

            <!-- Begin left section -->
            <left-bar></left-bar>
            <!-- End left section -->

            <!-- Begin main contents section -->
            <main-contents></main-contents>
            <!-- End main contents section -->

        </div>
    </div>
    <!-- End page contents -->

</template>

<script>
    import LeftBar from "@/components/dashboard/Shared/LeftBar";
    import MainContents from "@/components/dashboard/Customers/MainContents";

    export default
    {
        name: "Customers",
        components: { LeftBar, MainContents }
    }
</script>

<style scoped>

</style>