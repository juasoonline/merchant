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
                <div class="font-bold text-xl text-gray-600">Add Products</div>
                <!-- End page title -->

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-600">
                    <span class="">Add Product</span>
                </div>
                <!-- End breadcrumb -->

            </div>
        </section>
        <!-- End content header -->

        <!-- Begin form section -->
        <section class="px-6">
            <div class="">

                <!-- Begin form -->
                <create-product-form></create-product-form>
                <!-- End form -->

            </div>
        </section>
        <!-- End form section -->

  </div>
  <!-- End main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import CreateProductForm from "@/components/dashboard/CreateProduct/CreateProductForm";

    export default
    {
        name: "MainContents",
        components: { TopNavBar, CreateProductForm },
    }
</script>

<style scoped>
</style>