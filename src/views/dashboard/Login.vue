<template>

    <!-- Begin site contents -->
    <div class="">

        <!-- Begin top nav -->
        <top-bar></top-bar>
        <!-- End top nav -->

        <!-- Begin main contents -->
        <main-contents></main-contents>
        <!-- End main contents -->

    </div>
    <!-- End site contents -->

</template>

<script>
    import TopBar from "@/components/dashboard/Shared/TopBar";
    import MainContents from "@/components/dashboard/Login/MainContents";

    export default
    {
        name: 'Login',
        components: { TopBar, MainContents },
    }
</script>

<style scoped>
    body { background-color: gray }
</style>
