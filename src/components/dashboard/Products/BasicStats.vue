<template>

    <!-- Begin basic stats -->
    <section class="px-6 mb-9">
        <div class="bg-white shadow rounded text-gray-600">

            <!-- Begin heading -->
            <div class="font-bold text-lg px-5 py-3">Products Overview</div>
            <!-- End heading -->

            <hr class="border-gray-100">

            <!-- Begin stats contents -->
            <div class="flex grid grid-cols-4 px-5 py-3">

                <!-- Begin product counts -->
                <div class="flex items-center py-2">
                    <div class="mr-3">
                        <svg class="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-2xl">30,000</h4>
                        <p class="text-xs">Total products online</p>
                    </div>
                </div>
                <!-- End product counts -->

                <!-- Begin product sold -->
                <div class="flex items-center py-2">
                    <div class="mr-3">
                        <svg class="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-2xl">300,000</h4>
                        <p class="text-xs">Total products sold</p>
                    </div>
                </div>
                <!-- End product sold -->

                <!-- Begin product orders -->
                <div class="flex items-center py-2">
                    <div class="mr-3">
                        <svg class="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-2xl">30,000</h4>
                        <p class="text-xs">Total orders</p>
                    </div>
                </div>
                <!-- End product orders -->

                <!-- Begin customers counts -->
                <div class="flex items-center py-2">
                    <div class="mr-3">
                        <svg class="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-2xl">30,000</h4>
                        <p class="text-xs">Total customers</p>
                    </div>
                </div>
                <!-- End customers counts -->

            </div>
            <!-- End stats contents -->

        </div>
    </section>
    <!-- End basic stats -->

</template>

<script>
    export default
    {
        name: "BasicStats"
    }
</script>

<style scoped>
</style>