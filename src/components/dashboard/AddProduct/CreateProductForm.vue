<template>

    <!-- Begin product and specs form -->
    <form @submit.prevent="addProduct">
        <div class="bg-white rounded mb-5">

            <!-- Begin basic info -->
            <div class="mb-5 p-5">

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
                            <input type="text" v-model="product.name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Name">
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
                            <input type="text" v-model="product.quantity" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Quantity">
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
                            <input type="text" v-model="product.price" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Actual Price">
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
                            <input type="text" v-model="product.sales_price" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Sales Price">
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
                            <textarea v-model="product.description" rows="4" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Product Description"></textarea>
                        </div>
                    </div>
                    <!-- End description -->

                </div>
                <!-- End form -->

            </div>
            <!-- End basic info -->

            <!-- Begin submit button -->
            <div class="border-t border-gray-200 p-5">
                <div class="flex text-left">
                    <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="uppercase text-xxxs">Add Product</span>
                    </button>
                    <router-link to="/products" class="flex items-center rounded bg-red-700 text-white font-bold px-5 py-2 focus:outline-none hover:bg-red-600">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        <span class="uppercase text-xxxs">Cancel</span>
                    </router-link>
                </div>
            </div>
            <!-- Begin submit button -->

        </div>
    </form>
    <!-- End product and specs form -->

    <!-- Begin product and specs form -->
    <form v-if="product.product_id" @submit.prevent="addSpecification">
        <div class="bg-white rounded mb-5">

            <!-- Begin specification -->
            <div class="mb-5 p-5">

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
                        <button type="button" @click="addSpecification" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                            <span v-if="product.specifications.length === 0" class="uppercase text-xxxs font-bold">Click here to add</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header contents -->

                <!-- Begin form -->
                <div v-for="( spec, index ) in product.specifications" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly items-center py-1 text-xs">

                    <!-- Begin specification -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Specification</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="spec.specification" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Specification">
                        </div>
                    </div>
                    <!-- End specification -->

                    <!-- Begin value -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Value</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </div>
                            <input type="text" v-model="spec.value" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Value">
                            <div class="text-xs ml-4">
                                <button @click="removeSpecification( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End value -->

                </div>
                <!-- End form -->

            </div>
            <!-- End specification -->

            <!-- Begin submit button -->
            <div class="border-t border-gray-200 p-5">
                <div class="flex text-left">
                    <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                        <span class="uppercase text-xxxs">Add Product</span>
                    </button>
                    <router-link to="/products" class="flex items-center rounded bg-red-700 text-white font-bold px-5 py-2 focus:outline-none hover:bg-red-600">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        <span class="uppercase text-xxxs">Cancel</span>
                    </router-link>
                </div>
            </div>
            <!-- Begin submit button -->

        </div>
    </form>
    <!-- End product and specs form -->

    <!-- Begin overview -->
    <form v-if="product.product_id" @submit.prevent="addOverviews">
        <div class="bg-white rounded my-5">

            <!-- Begin form -->
            <div class="mb-5 p-5">

                <!-- Begin header -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Overview</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addOverview" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                            <span v-if="overviews.overviews.length === 0" class="uppercase text-xxxs font-bold">Click here to add</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header -->

                <!-- Begin form -->
                <div v-for="( overview, index ) in overviews.overviews" :key="index" class="flex grid grid-cols-3 gap-5 justify-evenly py-2 text-xs">

                <!-- Begin title -->
                <div class="mt-1">
                  <label class="text-gray-500 text-xs">Title</label>
                  <div class="flex mt-1">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    </div>
                    <input type="text" v-model="overview.title" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Title">
                  </div>
                </div>
                <!-- End title -->

                <!-- Begin description -->
                <div class="mt-1">
                  <label class="text-gray-500 text-xs">Description</label>
                  <div class="flex mt-1">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    </div>
                    <input type="text" v-model="overview.description" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Description">
                  </div>
                </div>
                <!-- End description -->

                <!-- Begin image -->
                <div class="mt-1">
                  <label class="text-gray-500 text-xs">File (Image)</label>
                  <div class="flex mt-1">
                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                    </div>
                    <input type="file" @change="setOverviewFilename( $event, overview )" :id="index" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Choose file">
                    <div class="text-xs ml-4">
                      <button v-on:click="removeOverview( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                        <span class="uppercase text-xxxs font-bold">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- End image -->

              </div>
                <!-- End form -->

            </div>
            <!-- End form -->

            <!-- Begin submit button -->
            <div class="border-t border-gray-200 p-5">
                <div class="flex text-left">
                    <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                        <span class="uppercase text-xxxs">Add Overview(s)</span>
                    </button>
                </div>
            </div>
            <!-- Begin submit button -->

        </div>
    </form>
    <!-- End overview form -->

    <!-- Begin images form -->
    <form v-if="product.product_id" @submit.prevent="addImages">
        <div class="bg-white rounded my-5">

            <!-- Begin form -->
            <div class="mb-5 p-5">

                <!-- Begin form -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Images</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addFile" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                            <span v-if="images.itemFiles.length === 0" class="uppercase text-xxxs font-bold">Click here to add</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header cont -->

                <!-- Begin form -->
                <div v-for="( file, index ) in images.itemFiles" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly py-2 text-xs">

                  <!-- Begin description -->
                  <div class="mt-1">
                      <label class="text-gray-500 text-xs">Description</label>
                      <div class="flex mt-1">
                          <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                          </div>
                          <input type="text" v-model="file.description" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Description">
                      </div>
                  </div>
                  <!-- End description -->

                  <!-- Begin image -->
                  <div class="mt-1">
                      <label class="text-gray-500 text-xs">File (Image)</label>
                      <div class="flex mt-1">
                          <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                          </div>
                          <input type="file" @change="setFilename( $event, file )" ref="file" name="file" :id="index" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Choose file">
                          <div class="text-xs ml-4">
                              <button v-on:click="removeFile( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
                                  <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                  <span class="uppercase text-xxxs font-bold">Remove</span>
                              </button>
                          </div>
                      </div>
                  </div>
                  <!-- End image -->

                </div>
                <!-- End form -->

          </div>
          <!-- End form -->

          <!-- Begin submit button -->
          <div class="border-t border-gray-200 p-5">
              <div class="flex text-left">
                  <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                      <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                      <span class="uppercase text-xxxs">Add Image(s)</span>
                  </button>
              </div>
          </div>
          <!-- Begin submit button -->

        </div>
    </form>
    <!-- End images form -->

</template>

<script>
    import { inject, reactive } from 'vue';
    import router from "@/router";
    import axios from "axios";

    export default
    {
        name: "CreateProductForm",
        setup()
        {
            const authentication = inject( 'authentication' )

            const actions = reactive({ item_id: 0, })
            const product = reactive({ product_id: null, name: "", quantity: "", sales_price: "", price: "", description: "", categories: [ { "type" : "Category", "category_id" : "75" }, { "type" : "Category", "category_id" : "76" }, { "type" : "Category", "category_id" : "78" }, ], specifications: [] })
            const overviews = reactive({ overviews: [] })
            const images = reactive({ itemFiles: [] })

            const addProduct = () =>
            {
                axios( { method: 'POST', url: 'products', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { "data" : { "type" : "Product", "attributes" : { "name" : product.name, "quantity" : product.quantity, "sales_price" : product.sales_price, "price" : product.price, "description" : product.description }, "relationships" : { "store" : { "store_id" : authentication.state.user.include.store.id }, "brand" : {}, "categories" : { "data": product.categories }, "specifications" : { "data": product.specifications } } } } } )
                    .then( response => { if ( response.status === 200 || response.status === 201 ){ router.replace('/product/'+response.data.data.attributes.resource_id ) }} )
                    .catch( error => { console.log( error.response ); } )
            }
            const addOverviews = () =>
            {
                axios( { method: 'POST', url: 'stores/products', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { "data" : { "type" : "Product", "attributes" : { "name" : product.name, "quantity" : product.quantity, "sales_price" : product.sales_price, "price" : product.price, "description" : product.description }, "relationships" : { "store" : { "store_id" : "1" }, "brand" : {}, "categories" : { "data": product.categories }, "specifications" : { "data": product.specifications }, "overviews" : { "data": product.overviews }, "files" : { "data": product.itemFiles } } } } } )
            }
            const addImages = () =>
            {}

            const addSpecification = () =>
            {
                product.specifications.push({
                  type: "Specification", specification: "", value: "",
                });
            }
            const removeSpecification = ( index ) =>
            {
                product.specifications.splice( index, 1 );
            }

            const addOverview = () => {
                overviews.overviews.push({
                    type: "Overview",
                    title: "",
                    description: "",
                    file_path: null
                });
            }
            const removeOverview = ( index ) => {
                overviews.overviews.splice( index, 1 );
            }
            const setOverviewFilename = ( event, overview ) => {
                let file_path = event.target.files[0];
                overview.file_path = file_path
            }

            const addFile = () => {
                images.itemFiles.push({
                    type: "File",
                    description: "",
                    file: { name: 'Choose File' }
                });
            }
            const removeFile = ( index ) => {
                images.itemFiles.splice( index, 1 );
            }
            const setFilename = ( event, fileIndex ) => {
                const file = event.target.files[0]
                fileIndex.file = file
            }

            return { authentication, actions, product, overviews, images, addProduct, addOverviews, addImages, addSpecification, removeSpecification, addOverview, removeOverview, setOverviewFilename, addFile, removeFile, setFilename }
        }
    }
</script>

<style scoped>
</style>