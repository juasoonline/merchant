<template>

    <!-- Begin main contents -->
    <div class="w-full">

        <!-- Begin top navbar section -->
        <top-nav-bar></top-nav-bar>
        <!-- End top navbar section -->

        <!-- Begin content header -->
        <section class="p-6">
            <div class="flex justify-between text-center">

                <!-- Begin page title -->
                <div class="font-bold text-xl text-gray-600">Products</div>
                <!-- End page title -->

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-600">
                    <router-link to="/products/create" class="flex items-center rounded bg-juaso-primary text-white font-bold px-4 py-1 w-full focus:outline-none hover:bg-juaso-secondary">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="uppercase text-xxxs">Add Product</span>
                    </router-link>
                </div>
                <!-- End breadcrumb -->

            </div>
        </section>
        <!-- End content header -->

        <!-- Begin basic stats -->
        <basic-stats></basic-stats>
        <!-- End basic stats -->

    </div>
    <!-- End main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import BasicStats from "@/components/dashboard/Products/BasicStats";

    export default
    {
        name: "MainContents",
        components: { TopNavBar, BasicStats },
    }
</script>

<style scoped>

</style>