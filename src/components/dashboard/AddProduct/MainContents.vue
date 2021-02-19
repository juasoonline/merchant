<template>

    <!-- Begin main contents -->
    <div class="h-screen w-full">

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

  </div>
  <!-- End main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";

    export default
    {
        name: "MainContents",
      components: { TopNavBar }
    }
</script>

<style scoped>

</style>