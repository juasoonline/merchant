<template>

    <!-- Begin page contents -->
    <div class="w-screen h-screen bg-gray-200">
        <div class="text-center flex justify-center grid">

            <div class="pt-52">
                <h1 class="text-7xl font-bold text-gray-600">404</h1>
            </div>

            <div class="pt-10">
                <h1 class="text-3xl font-bold text-gray-600">We couldn’t connect the dots</h1>
                <p class="text-sm text-gray-600">This page was not found.</p>
                <p class="text-sm text-gray-600">You may have mistyped the address or the page may have moved.</p>
            </div>

            <div class="pt-10">
                <router-link to="/dashboard" class="bg-juaso-primary text-green-50 py-4 px-20 rounded hover:bg-juaso-secondary shadow-lg">Take Me Back Home</router-link>
            </div>
        </div>
    </div>
    <!-- End page contents -->

</template>

<script>
    export default
    {
        name: "404"
    }
</script>

<style scoped>

</style>