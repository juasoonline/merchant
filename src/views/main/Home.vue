<template>

    <!-- Begin site contents -->
    <div class="font-juaso">

        <!-- Begin top nav -->
        <top-bar></top-bar>
        <!-- End top nav -->

        <!-- Begin main nav bar -->
        <main-nav></main-nav>
        <!-- End main nav bar -->

        <!-- Begin main contents -->
        <main-contents></main-contents>
        <!-- End main contents -->

        <!-- Begin main footer -->
        <main-footer></main-footer>
        <!-- End main footer -->

    </div>
    <!-- End site contents -->

</template>

<script>
    import TopBar from "@/components/main/Shared/TopBar";
    import MainNav from "@/components/main/Shared/MainNav";
    import MainFooter from "@/components/main/Shared/MainFooter";
    import MainContents from "@/components/main/Home/MainContents";

    export default
    {
        name: 'Home',
        components: {MainContents, TopBar, MainNav, MainFooter },
    }
</script>
