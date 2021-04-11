<template>

    <!-- Begin contents -->
    <section class="px-6 mb-5">
        <div class="flex grid grid-cols-12 gap-3">

            <!-- Begin left contents -->
            <div class="col-span-3">

                <!-- Begin campaign -->
                <div class="flex gap-2 rounded bg-juaso-secondary text-white px-4 py-7 mb-3">
                    <div class="w-12/12">
                        <h2 class="font-light text-sm">Enhance your <span class="font-bold">Campaign</span> for better outreach</h2>
                        <div class="mt-5 items-center">
                            <router-link to="" class="rounded bg-green-400 hover:bg-green-500 text-white text-sm px-6 py-2 focus:outline-none">
                                Learn More...
                            </router-link>
                        </div>
                    </div>
                    <div class="w-6/12">
                        <img :src="campaign" alt="campaign">
                    </div>
                </div>
                <!-- End campaign -->

                <!-- Begin top selling -->
                <div class="bg-white rounded px-4 py-7">

                    <!-- Begin header -->
                    <div class="flex justify-between text-xxs font-bold border-b pb-2">
                        <div>Top Selling Products</div>
                        <div>Sort By: Yearly</div>
                    </div>
                    <!-- End header -->

                    <!-- Begin product sales progress -->
                    <div class="w-full">

                      <div class="flex grid grid-cols-12 items-center my-4">
                          <div class="col-span-3 text-xs">iPhones</div>
                          <div class="col-span-9 bg-gray-300 rounded"><div class="w-9/12 bg-green-400 py-0.5 rounded-full"></div></div>
                      </div>

                      <div class="flex grid grid-cols-12 items-center my-4">
                          <div class="col-span-3 text-xs">iPhones</div>
                          <div class="col-span-9 bg-gray-300 rounded"><div class="w-9/12 bg-yellow-400 py-0.5 rounded-full"></div></div>
                      </div>

                      <div class="flex grid grid-cols-12 items-center my-4">
                          <div class="col-span-3 text-xs">iPhones</div>
                          <div class="col-span-9 bg-gray-300 rounded"><div class="w-9/12 bg-red-400 py-0.5 rounded-full"></div></div>
                      </div>

                      <div class="flex grid grid-cols-12 items-center my-4">
                          <div class="col-span-3 text-xs">iPhones</div>
                          <div class="col-span-9 bg-gray-300 rounded"><div class="w-9/12 bg-blue-400 py-0.5 rounded-full"></div></div>
                      </div>

                      <div class="flex grid grid-cols-12 items-center my-4">
                          <div class="col-span-3 text-xs">iPhones</div>
                          <div class="col-span-9 bg-gray-300 rounded"><div class="w-9/12 bg-purple-400 py-0.5 rounded-full"></div></div>
                      </div>

                    </div>
                    <!-- End product sales progress -->

                </div>
                <!-- End top selling -->

            </div>
            <!-- End left contents -->

            <!-- Begin right contents -->
            <div class="bg-white col-span-9 rounded text-center ">
                <div class="">Chart Goes Here</div>
            </div>
            <!-- End right contents -->

        </div>
    </section>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "Analytics",
        setup()
        {
            const campaign = '../assets/images/campaign.png'
            return { campaign }
        }
    }
</script>

<style scoped>
</style>