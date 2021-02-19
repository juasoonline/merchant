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

        <!-- Begin form section -->
        <section class="px-6">
            <div class="">
                <form class="">

                    <!-- Begin basic info -->
                    <div class="bg-white rounded mb-5 p-5">

                        <!-- Begin header -->
                        <div class="border-b border-gray-200 pb-3 text-gray-700">
                            <h3 class="font-bold">Basic Information</h3>
                            <p class="text-xs">Fill all information below</p>
                        </div>
                        <!-- End header -->

                        <!-- Begin form -->
                        <div class="flex grid grid-cols-2 gap-5 justify-evenly py-4 text-xs">

                            <!-- Begin product name -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Name</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                                    </div>
                                    <input type="text" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Name">
                                </div>
                            </div>
                            <!-- End product name -->

                            <!-- Begin quantity -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Quantity</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                                    </div>
                                    <input type="text" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Quantity">
                                </div>
                            </div>
                            <!-- End quantity -->

                            <!-- Begin price -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Actual Price</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <input type="text" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Actual Price">
                                </div>
                            </div>
                            <!-- End price -->

                            <!-- Begin sale price -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Sales Price</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <input type="text" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Sales Price">
                                </div>
                            </div>
                            <!-- End sale price -->

                            <!-- Begin brand -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Brand</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    </div>
                                    <select name="brand" class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">
                                        <option value="">Phones</option>
                                        <option value="">Phones more</option>
                                        <option value="">Phones more and more</option>
                                    </select>
                                </div>
                            </div>
                            <!-- End brand -->

                            <!-- Begin category -->
                            <div class="mt-1">
                                <label class="text-gray-500 text-xs">Category(s)</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    </div>
                                    <select class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">
                                        <option value="">Phones</option>
                                        <option value="">Phones more</option>
                                        <option value="">Phones more and more</option>
                                    </select>
                                </div>
                            </div>
                            <!-- End category -->

                            <!-- Begin description -->
                            <div class="mt-1 col-span-2">
                                <label class="text-gray-500 text-xs">Description</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-start justify-center border-l border-t border-b rounded-l">
                                        <svg class="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                                    </div>
                                    <textarea rows="4" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Description"></textarea>
                                </div>
                            </div>
                            <!-- End description -->

                        </div>
                        <!-- End form -->

                    </div>
                    <!-- End basic info -->

                    <!-- Begin specification -->
                    <div class="bg-white rounded mb-5 p-5">

                        <!-- Begin header contents -->
                        <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                            <!-- Begin header -->
                            <div class="">
                                <h3 class="font-bold">Product Specifications</h3>
                                <p class="text-xs">Fill all information below</p>
                            </div>
                            <!-- End header -->

                            <!-- Begin add button -->
                            <div class="text-xs">
                                <button class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Add more</span>
                                </button>
                            </div>
                            <!-- End add button -->

                        </div>
                        <!-- End header contents -->

                        <!-- Begin form -->
                        <div class="flex grid grid-cols-2 gap-5 justify-evenly py-4 text-xs">

                        </div>
                        <!-- End form -->

                    </div>
                    <!-- End specification -->

                    <!-- Begin overview -->
                    <div class="bg-white rounded mb-5 p-5">

                        <!-- Begin header contents -->
                        <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                            <!-- Begin header -->
                            <div class="">
                                <h3 class="font-bold">Product Overview</h3>
                                <p class="text-xs">Fill all information below</p>
                            </div>

                            <!-- Begin add button -->
                            <div class="text-xs">
                                <button class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Add more</span>
                                </button>
                            </div>
                            <!-- End add button -->

                        </div>
                        <!-- End header contents -->

                        <!-- Begin form -->
                        <div class="flex grid grid-cols-2 gap-5 justify-evenly py-4 text-xs">

                        </div>
                        <!-- End form -->

                    </div>
                    <!-- End overview -->

                    <!-- Begin images -->
                    <div class="bg-white rounded mb-5 p-5">

                        <!-- Begin header contents -->
                        <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                            <!-- Begin header -->
                            <div class="">
                                <h3 class="font-bold">Product Images</h3>
                                <p class="text-xs">Fill all information below</p>
                            </div>

                            <!-- Begin add button -->
                            <div class="text-xs">
                                <button class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Add more</span>
                                </button>
                            </div>
                            <!-- End add button -->

                        </div>
                        <!-- End header contents -->

                        <!-- Begin form -->
                        <div class="flex grid grid-cols-2 gap-5 justify-evenly py-4 text-xs">

                        </div>
                        <!-- End form -->

                    </div>
                    <!-- End images -->

                </form>
            </div>
        </section>
        <!-- End form section -->

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