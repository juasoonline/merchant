<template>

    <!-- Begin lower footer contents -->
    <footer class="bg-juaso-primary">

        <!-- Begin company and site info -->
        <div class="container py-20 m-auto text-gray-800 flex flex-wrap flex-col grid gap-16 grid-cols-12">

            <!-- Begin about us -->
            <div class="text-gray-300 col-span-2">
                <router-link to="/"><img :src="LogoFooter" alt="" class="mb-2"></router-link>
            </div>
            <!-- End about us -->

            <!-- Begin policies contents -->
            <div class="text-gray-100 col-span-10">
                <h1 class="font-bold mb-2">About Juasoonline</h1>
                <p class="text-sm text-gray-300">Juasoonline offers its millions of registered users a comprehensive selection of the latest consumer electronics, entertainment, fashion, Jewel / Watches and many more products. Juasoonline is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. Newegg is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.</p>
            </div>
            <!-- End policies contents -->

        </div>
        <!-- End company and site info -->

        <!-- Begin copyright -->
        <div class="container m-auto">
            <div class="flex m-auto sm:border-t border-gray-400 text-gray-400 text-sm flex-col">
                <div class="my-5">© Copyright. All Rights Reserved.</div>
            </div>
        </div>
        <!-- End copyright -->

    </footer>
    <!-- End lower footer contents -->

</template>

<script>
    export default
    {
        name: "MainFooter",
        data()
        {
            return {
                PlayStoreLogo: './assets/img/icon-googleplay.png',
                AppStoreLogo: './assets/img/icon-appstore.png',
                LogoFooter: './assets/img/logo-footer.png',
            }
        }
    }
</script>

<style scoped>
</style>