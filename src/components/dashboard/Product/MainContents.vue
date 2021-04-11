<template>

    <!-- Begin main contents -->
    <div class="w-full">

        <!-- Begin top navbar section -->
        <top-nav-bar></top-nav-bar>
        <!-- End top navbar section -->

        <!-- Begin main contents -->
        <main class="p-6">
            <div class="flex grid grid-cols-12 gap-5">

                <!-- Begin left section -->
                <left-content></left-content>
                <!-- End left section -->

                <!-- Begin right section -->
                <right-content></right-content>
                <!-- End right section -->

            </div>
        </main>
        <!-- End main contents -->

    </div>
    <!-- End main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import LeftContent from "@/components/dashboard/Product/LeftContent";
    import RightContent from "@/components/dashboard/Product/RightContent";

    export default
    {
        name: "MainContents",
        components: { TopNavBar, LeftContent, RightContent },
    }
</script>

<style scoped>
</style>