<template>

    <!-- Begin product and specs form -->
    <form @submit.prevent="addProduct">

        <!-- Begin basic info -->
        <div class="bg-white rounded mb-5">
            <div class="mb-5 p-5">

                <!-- Begin header -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin header -->
                    <div>
                        <h3 class="font-bold">Basic Information</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- Begin header -->

                    <div class="text-xs">
                        Charge: Ghs 10.00 per month
                    </div>
                </div>
                <!-- End header -->

                <!-- Begin form -->
                <div class="flex grid grid-cols-2 gap-5 justify-evenly py-4 text-xs">

                    <!-- Begin product name -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Name</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            </div>
                            <select name="brand" class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">
                                <option>Select Brand</option>
                                <option v-for="brand in product.brands" :key="brand.id" value="">{{ brand.attributes.name }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- End brand -->

                    <!-- Begin category -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs typo__label">Category(s)</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            </div>
                            <div class="text-xs w-full">
                                <div class="">
                                    <div x-data="{ open: false }" class="relative">
                                        <div x-on:click="open = true" class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">
                                            <div v-if="product.categories.length === 0">
                                                Select category(s)
                                            </div>
                                            <div v-else>
                                                <span v-for="category in product.categories" :key="category.id" class="px-3 bg-juaso-extra rounded mr-2 text-xxs text-white py-0.5">{{category.name}}</span>
                                            </div>
                                        </div>
                                        <div x-show.transition="open" x-on:click.away="open = false" class="absolute right-0 w-full py-2 bg-white border rounded-b shadow-xl px-2 overflow-hidden h-80 overflow-y-auto" style="margin-top: -1px">
                                            <div v-for="mainCate in product.allCats" :key="mainCate.id">
                                                <div class="font-bold text-xxs border-b mb-1.5 pb-2 mx-1 flex items-center">
                                                    {{ mainCate.include.group.attributes.name }}
                                                    <svg class="w-3 h-3 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                                                    {{ mainCate.attributes.name }}
                                                </div>
                                                <label v-for="subCate in mainCate.include.subcategory" :key="subCate.id" class="inline-flex items-center w-full cursor-pointer">
                                                    <input type="checkbox" @change="checkAction( $event, subCate.attributes.name )" :id="subCate.id" class="form-checkbox h-5 w-5 text-blue-600">
                                                    <span class="ml-2.5 text-gray-700">{{ subCate.attributes.name }}</span>
                                                </label>
                                                <div class="py-1.5"><hr></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        </div>
        <!-- End basic info -->

        <!-- Begin specification -->
        <div class="bg-white rounded mb-5">
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
                        <button type="button" @click="addSpecification" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span v-if="product.specifications.length === 0" class="uppercase text-xxxs font-bold">Click here to add specification(s)</span>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="spec.specification" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Specification">
                        </div>
                    </div>
                    <!-- End specification -->

                    <!-- Begin value -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Value</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </div>
                            <input type="text" v-model="spec.value" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Value">
                            <div class="text-xs ml-4">
                                <button type="button" @click="removeSpecification( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-2.5 w-full focus:outline-none hover:bg-red-600">
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
        </div>
        <!-- End specification -->

        <!-- Begin image -->
        <div class="bg-white rounded mb-5">
            <div class="my-5 p-5">

                <!-- Begin header -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Images</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addImage" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span v-if="product.images.length === 0" class="uppercase text-xxxs font-bold">Click here to add image(s)</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header -->

                <!-- Begin form contents -->
                <div v-for="( file, index ) in product.images" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly py-2 text-xs">

                    <!-- Begin description -->
                    <div class="mt-1">
                        <label for="description" class="text-gray-500 text-xs">Description</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="file.description" id="description" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Description">
                        </div>
                    </div>
                    <!-- End description -->

                    <!-- Begin image -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">File (Image)</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="file" @change="setImageFilename( $event, file )" ref="file" name="file" :id="index" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Choose file">
                            <div class="text-xs ml-4">
                                <button v-on:click="removeImage( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-2.5 w-full focus:outline-none hover:bg-red-600">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End image -->

                </div>
                <!-- End form contents -->

            </div>
        </div>
        <!-- Begin image -->

        <!-- Begin overview -->
        <div class="bg-white rounded mb-5">
            <div class="my-5 p-5">

                <!-- Begin header contents -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Overview</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addOverview" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span v-if="product.overviews.length === 0" class="uppercase text-xxxs font-bold">Click here to add overview(s)</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header contents -->

                <!-- Begin form -->
                <div v-for="( overview, index ) in product.overviews" :key="index" class="flex grid grid-cols-3 gap-5 justify-evenly py-2 text-xs">

                    <!-- Begin title -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Title</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
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
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
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
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="file" @change="setOverviewFilename( $event, overview )" :id="index" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Choose file">
                            <div class="text-xs ml-4">
                                <button @click="removeOverview( index )" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
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
        </div>
        <!-- End overview -->

        <!-- Begin colors -->
        <div class="bg-white rounded mb-5">
            <div class="my-5 p-5">

                <!-- Begin header contents -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Colors</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addColor" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span v-if="product.colors.length === 0" class="uppercase text-xxxs font-bold">Click here to add color(s)</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header contents -->

                <!-- Begin form -->
                <div v-for="( color, index ) in product.colors" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly py-2 text-xs">

                    <!-- Begin title -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Enter Color Name</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="color.color" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Color">
                        </div>
                    </div>
                    <!-- End title -->

                    <!-- Begin image -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Choose Image For This Color</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="file" @change="setColorFilename( $event, color )" :id="index" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Choose file">
                            <div class="text-xs ml-4">
                                <button @click="removeColor( index )" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
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
        </div>
        <!-- End colors -->

        <!-- Begin sizes -->
        <div class="bg-white rounded mb-5">
            <div class="my-5 p-5">

                <!-- Begin header contents -->
                <div class="border-b border-gray-200 pb-3 text-gray-700 flex grid-cols-6 grid-cols-2 justify-between items-center">

                    <!-- Begin title -->
                    <div class="">
                        <h3 class="font-bold">Product Sizes</h3>
                        <p class="text-xs">Fill all information below</p>
                    </div>
                    <!-- End title -->

                    <!-- Begin add button -->
                    <div class="text-xs">
                        <button type="button" @click="addSize" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span v-if="product.sizes.length === 0" class="uppercase text-xxxs font-bold">Click here to add size(s)</span>
                            <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                        </button>
                    </div>
                    <!-- End add button -->

                </div>
                <!-- End header contents -->

                <!-- Begin form -->
                <div v-for="( size, index ) in product.sizes" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly py-2 text-xs">

                    <!-- Begin title -->
                    <div class="mt-1">
                        <label class="text-gray-500 text-xs">Enter Size</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="size.size" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Color">
                        </div>
                    </div>
                    <!-- End title -->

                    <!-- Begin description -->
                    <div class="mt-1">
                        <label for="description" class="text-gray-500 text-xs">Description</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <input type="text" v-model="size.description" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Description">
                            <div class="text-xs ml-4">
                                <button @click="removeSize( index )" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-3 w-full focus:outline-none hover:bg-red-600">
                                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                    <span class="uppercase text-xxxs font-bold">Remove</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End description -->

                </div>
                <!-- End form -->

            </div>
        </div>
        <!-- End sizes -->

        <!-- Begin submit button -->
        <div class="bg-white rounded mb-5 p-5">
            <div class="flex text-left justify-between">
                <button v-if="loader.isLoading === false" type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="uppercase text-xxxs">Add Product</span>
                </button>
                <button v-else disabled type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="flex items-center"><p class="uppercase text-xxxs mr-2">Please wait...</p> <spinner :loading="loader.loading" :color="loader.color" :size="loader.size"></spinner></span>
                </button>
                <router-link to="/products" class="flex items-center rounded bg-red-700 text-white font-bold px-5 py-2 focus:outline-none hover:bg-red-600">
                    <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span class="uppercase text-xxxs">Cancel</span>
                </router-link>
            </div>
        </div>
        <!-- Begin submit button -->

    </form>
    <!-- End product and specs form -->

</template>

<script>
    import { inject, onBeforeMount, reactive } from 'vue';
    import Spinner from 'vue-spinner/src/MoonLoader.vue'

    import router from "@/router";
    import axios from "axios";
    import { Notyf } from "notyf";

    export default
    {
        name: "CreateProductForm",
        components: { Spinner },
        setup()
        {
            const notification = new Notyf();
            const loader = reactive({ color: '#FFFFFF', size: '10px', loading: true, isLoading: false })

            const authentication = inject( 'authentication' )
            const store = inject( 'store' )

            const product = reactive({ product_id: null, name: "", quantity: "", price: "", sales_price: "", brand: "", description: "", categories: [], specifications: [], images: [], overviews: [], colors: [], sizes: [], allCats: [], brands: [] })
            const images = reactive({ loader: { color: '#FFFFFF', size: '11px', loading: true, isLoading: false } })

            const addProduct = () =>
            {
                loader.isLoading = true
                let formData = new FormData();

                // Product data
                formData.append('name', product.name)
                formData.append('quantity', product.quantity)
                formData.append('sales_price', product.sales_price)
                formData.append('price', product.price)
                formData.append('description', product.description)
                formData.append('store_id', authentication.state.user.include.store.id)

                // Check if product has categories
                if ( product.categories.length !== 0 )
                {
                    for( let cat = 0; cat < product.categories.length; cat ++ )
                    {
                        formData.append( 'categories[' + cat + ']', product.categories[cat]['category_id'] )
                    }
                }

                // Check if product has specifications
                if ( product.specifications.length !== 0 )
                {
                    for( let spec = 0; spec < product.specifications.length; spec ++ )
                    {
                        formData.append( 'specifications[' + spec + ']', product.specifications[spec]['specification'] )
                        formData.append( 'specification_value[' + spec + ']', product.specifications[spec]['value'] )
                    }
                }

                // Check if product has images
                if ( product.images.length !== 0 )
                {
                    for( let img = 0; img < product.images.length; img ++ )
                    {
                        formData.append( 'product_image_descriptions[' + img + ']', product.images[img]['description'] )
                        formData.append( 'product_images[' + img + ']', product.images[img]['file'] )
                    }
                }

                // Check if product has images
                if ( product.overviews.length !== 0 )
                {
                    for( let overview = 0; overview < product.overviews.length; overview ++ )
                    {
                        formData.append( 'overview_titles[' + overview + ']', product.overviews[overview]['title'] )
                        formData.append( 'overview_descriptions[' + overview + ']', product.overviews[overview]['description'] )
                        formData.append( 'overview_images[' + overview + ']', product.overviews[overview]['file'] )
                    }
                }

                // Check if product has colors
                if ( product.colors.length !== 0 )
                {
                    for( let color = 0; color < product.colors.length; color ++ )
                    {
                        formData.append( 'colors[' + color + ']', product.colors[color]['color'] )
                        formData.append( 'color_images[' + color + ']', product.colors[color]['file'] )
                    }
                }

                // Check if product has sizes
                if ( product.sizes.length !== 0 )
                {
                    for( let size = 0; size < product.sizes.length; size ++ )
                    {
                        formData.append( 'sizes[' + size + ']', product.sizes[size]['size'] )
                        formData.append( 'size_descriptions[' + size + ']', product.sizes[size]['description'] )
                    }
                }

                axios({ method: 'POST', url: '/store/' + authentication.state.user.include.store.attributes.resource_id + '/products', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: formData })
                    .then( response =>
                    {
                        if ( response.data.status === 'Success' || response.data.code === 201 )
                        {
                            loader.isLoading = false
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Product created successfully</p>', duration: 10000, ripple: false, dismissible: true })
                            router.replace('/product/' + response.data.data.attributes.resource_id )
                        }
                        else
                        {
                            loader.isLoading = false
                            notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        }
                    })
                    .catch( error =>
                    {
                        error.response
                        loader.isLoading = false
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                    })
            }
            const checkAction = ( event, name ) =>
            {
                if ( event.target.checked ) { product.categories.push({ category_id: event.target.id, name: name }) }
                else { for ( let i = 0; i < product.categories.length; i++ ){ if ( product.categories[i].category_id === event.target.id) { product.categories.splice(i,1); break; }}}
            }

            const addSpecification = () => { product.specifications.push({ specification: "", value: "" })}
            const removeSpecification = ( index ) => { product.specifications.splice( index, 1 ) }

            const addImage = () => { product.images.push({ description: "", image: { name: 'Choose File' } }) }
            const removeImage = ( index ) => { product.images.splice( index, 1 ) }
            const setImageFilename = ( event, img ) => { const image = event.target.files[0]; img.file = image }

            const addOverview = () => { product.overviews.push({ title: "", description: "", image: { name: 'Choose File' } }) }
            const removeOverview = ( index ) => { product.overviews.splice( index, 1 ) }
            const setOverviewFilename = ( event, overview ) => { const image = event.target.files[0]; overview.file = image }

            const addColor = () => { product.colors.push({ color: "", image: { name: 'Choose File' } }) }
            const removeColor = ( index ) => { product.colors.splice( index, 1 ) }
            const setColorFilename = ( event, color ) => { const image = event.target.files[0]; color.file = image }

            const addSize = () => { product.sizes.push({ size: "", description: "" }) }
            const removeSize = ( index ) => { product.sizes.splice( index, 1 ) }

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'categories?include=group,subcategory', headers: { 'Authorization': 'Bearer ' + authentication.state.token } })
                    .then( response => { product.allCats = response.data.data } )
                    .catch( error => { error.response })

                axios({ method: 'GET', url: 'brands', headers: { 'Authorization': 'Bearer ' + authentication.state.token } })
                    .then( response => { product.brands = response.data.data } )
                    .catch( error => { error.response })
            })

            return { loader, authentication, product, images, addProduct, store, checkAction, addSpecification, removeSpecification, addImage, removeImage, setImageFilename, addOverview, removeOverview, setOverviewFilename, addColor, removeColor, setColorFilename, addSize, removeSize }
        }
    }
</script>

<style src="">
    input[type=file]::file-selector-button
    {
      /*border: 2px solid #6c5ce7;*/
      /*padding: .2em .4em;*/
      /*border-radius: .2em;*/
      /*background-color: #a29bfe;*/
      /*transition: 1s;*/
      display: none;
    }
    input[type=file]::file-selector-button:hover
    {
      /*background-color: #81ecec;*/
      /*border: 2px solid #00cec9;*/
      display: none;
    }
</style>