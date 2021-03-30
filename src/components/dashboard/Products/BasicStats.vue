<template>

    <!-- Begin basic stats -->
    <section class="px-6 mb-9">
        <div class="w-full mx-auto">
            <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">

                <!-- Begin product count -->
                <div class="w-full lg:w-1/4">
                    <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex flex-col">
                                <div class="text-xs uppercase font-bold text-gray-500 mb-2">Products</div>
                                <div class="text-3xl font-bold">1,023</div>
                            </div>
                            <svg class="stroke-current text-gray-300" fill="none" height="40" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- End product count -->

                <!-- Begin products sold count -->
                <div class="w-full lg:w-1/4">
                    <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex flex-col">
                                <div class="text-xs uppercase font-bold text-gray-500 mb-2">Products Sold</div>
                                <div class="text-3xl font-bold">12,023</div>
                            </div>
                            <svg class="stroke-current text-gray-300" fill="none" height="40" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- End products sold count -->

                <!-- Begin order count -->
                <div class="w-full lg:w-1/4">
                    <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex flex-col">
                                <div class="text-xs uppercase font-bold text-gray-500 mb-2">Orders</div>
                                <div class="text-3xl font-bold">1,023</div>
                            </div>
                            <svg class="stroke-current text-gray-300" fill="none" height="40" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- End order count -->

                <!-- Begin order count -->
                <div class="w-full lg:w-1/4">
                    <div class="widget w-full p-4 rounded bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex flex-col">
                                <div class="text-xs uppercase font-bold text-gray-500 mb-2">Pending Orders</div>
                                <div class="text-3xl font-bold">1,023</div>
                            </div>
                            <svg class="stroke-current text-gray-300" fill="none" height="40" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- End order count -->

            </div>
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