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
                <div class="font-bold text-xl text-gray-600">Dashboard</div>
                <!-- End page title -->

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-600">
                    <span class="">Dashboard</span>
                </div>
                <!-- End breadcrumb -->

            </div>
        </section>
        <!-- End content header -->

        <!-- Begin basic stats -->
        <basic-stats></basic-stats>
        <!-- End basic stats -->

    </div>
    <!-- Begin main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import BasicStats from "@/components/dashboard/Dashboard/BasicStats";

    export default
    {
        name: 'Dashboard',
        components: { TopNavBar, BasicStats },
    }
</script>
