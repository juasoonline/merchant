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
    import MainContents from "@/components/main/Join/MainContents";
    import MainFooter from "@/components/main/Shared/MainFooter";

    export default
    {
        name: 'Home',
        components: { TopBar, MainNav, MainContents, MainFooter },
    }
</script>
