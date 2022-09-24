<template>

    <!-- Begin contents -->
    <div class="col-span-9 bg-white rounded">
        <div class="p-4">
            <div class="flex flex-wrap">
                <div class="w-full">

                    <!-- Begin tab menu -->
                    <ul class="flex mb-0 list-none flex-wrap flex-row">
                        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-sm px-5 py-2 block leading-normal" @click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 1, 'text-gray-500 bg-gray-200': tabs.openTab === 1}">
                                Product Information
                            </a>
                        </li>
                        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-sm px-5 py-2 block leading-normal" @click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 2, 'text-gray-500 bg-gray-200': tabs.openTab === 2}">
                                Images
                            </a>
                        </li>
                        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-sm px-5 py-2 block leading-normal" @click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 3, 'text-gray-500 bg-gray-200': tabs.openTab === 3}">
                                Specifications
                            </a>
                        </li>
                        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-sm px-5 py-2 block leading-normal" @click="toggleTabs(4)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 4, 'text-gray-500 bg-gray-200': tabs.openTab === 4}">
                                Overviews
                            </a>
                        </li>
                        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-sm px-5 py-2 block leading-normal" @click="toggleTabs(5)" v-bind:class="{'text-gray-600 bg-white': tabs.openTab !== 5, 'text-gray-500 bg-gray-200': tabs.openTab === 5}">
                                Reviews
                            </a>
                        </li>
                    </ul>
                    <!-- End tab menu -->

                    <!-- Begin tab contents -->
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">

                                <!-- Begin product info -->
                                <div v-bind:class="{ 'hidden': tabs.openTab !== 1, 'block': tabs.openTab === 1 }">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                                            <!-- Begin product information -->
                                            <div class="flex grid-cols-2 px-4 py-2 border items-center justify-between">
                                                <div class="font-bold text-gray-600 text-xs">Product Information</div>
                                                <div class="flex">
                                                    <div class="flex items-center mr-4">
                                                        <p class="text-xxs mr-2">Status:</p>
                                                        <p class="text-xxs font-bold uppercase text-green-700">Active</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="flex items-center rounded bg-green-500 text-white font-bold px-4 py-1 focus:outline-none hover:bg-green-600">
                                                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                            <span class="uppercase text-xxxs font-bold">Edit</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <table class="w-full divide-y divide-gray-200">
                                                <tbody class="bg-white divide-y divide-gray-200 text-xs">
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b w-1/2">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Product ID</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.resource_id }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b w-1/2">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Name</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.name }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b w-1/2">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Description</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.description }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Original Price</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.price }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Sales Price</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.sales_price }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Quantity (In Stock)</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.quantity }}</div>
                                                        </td>
                                                    </tr>
                                                    <tr class="border rounded">
                                                        <td class="px-4 py-3 bg-gray-100 border-r border-b">
                                                            <div class="flex items-center">
                                                                <div class="text-gray-900">Date Created</div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b w-1/2">
                                                            <div class="font-medium text-gray-900 font-bold">{{ product.attributes.created_at }}</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- End product information -->

                                            <!-- Begin category info -->
                                            <div class="flex grid-cols-2 px-4 py-2 border items-center justify-between">
                                                <div class="font-bold text-gray-600 text-xs">Product Category</div>
                                                <div class="flex">
                                                    <button type="button" class="flex items-center rounded bg-green-500 text-white font-bold px-4 py-1 focus:outline-none hover:bg-green-600">
                                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                        <span class="uppercase text-xxxs font-bold">Edit</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <table class="w-full divide-y divide-gray-200">
                                                <tbody class="bg-white divide-y divide-gray-200 text-xs">
                                                    <tr class="border rounded w-full">
                                                        <td class="px-4 py-2 bg-gray-100 border-r border-b" style="width: 50%">
                                                            <div class="flex items-center"><div class="text-gray-900">Product Category(s)</div></div>
                                                        </td>
                                                        <td class="px-4 py-2 border-b" style="width: 50%">
                                                            <div class="font-medium text-gray-900 font-bold">
                                                                <span v-for="category in product.categories" :key="category.attributes.resource_id" class="bg-gray-200 hover:bg-gray-300 mx-1 rounded-full px-2 font-bold text-xxs leading-loose" >
                                                                    {{ category.attributes.name }}
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- End category info -->
                                        </div>
                                    </div>
                                </div>
                                <!-- End product info -->

                                <!-- Begin images -->
                                <div v-bind:class="{ 'hidden': tabs.openTab !== 2, 'block': tabs.openTab === 2 }">

                                    <!-- Begin images form -->
                                    <div class="mb-3">
                                        <form @submit.prevent="createImage">
                                            <div class="bg-white rounded">

                                                <!-- Begin form -->
                                                <div class="mb-5">

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
                                                            <button type="button" @click="addFile" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-1.5 w-full focus:outline-none hover:bg-juaso-secondary">
                                                                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <span v-if="images.images.length === 0" class="uppercase text-xxxs font-bold">Click here to add image(s)</span>
                                                                <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                                                            </button>
                                                        </div>
                                                        <!-- End add button -->

                                                    </div>
                                                    <!-- End header -->

                                                    <!-- Begin form contents -->
                                                    <div v-for="( file, index ) in images.images" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly py-2 text-xs">

                                                        <!-- Begin description -->
                                                        <div class="mt-1">
                                                            <label for="description" class="text-gray-500 text-xs">Description</label>
                                                            <div class="flex mt-1">
                                                                <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
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
                                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                                                </div>
                                                                <input type="file" @change="setFilename( $event, file )" ref="file" name="file" :id="index" class="border rounded-r px-3 py-1.5 w-full focus:outline-none" placeholder="Choose file">
                                                                <div class="text-xs ml-4">
                                                                    <button v-on:click="removeFile( index );" class="flex items-center rounded bg-red-500 text-white font-bold px-5 py-2.5 w-full focus:outline-none hover:bg-red-600">
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
                                                <!-- End form -->

                                                <!-- Begin submit button -->
                                                <div v-if="images.images.length != 0" class="">
                                                    <div class="flex text-left">
                                                        <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                                                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                                            <span class="uppercase text-xxxs">
                                                                  <span v-if="images.loader.isLoading === false">Add Image(s)</span>
                                                                  <span v-else><moon-loader :loading="images.loader.loading" :color="images.loader.color" :size="images.loader.size"></moon-loader></span>
                                                              </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- Begin submit button -->

                                            </div>
                                        </form>
                                    </div>
                                    <!-- End images form -->

                                    <!-- Begin images contents -->
                                    <div>
                                        <div class="flex flex-wrap -m-4">
                                            <div v-for="image in product.images" :key="image.attributes.resource_id" class="px-4 py-3 md:w-1/3">
                                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded overflow-hidden">
                                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
                                                    <div class="p-6">
                                                        <p class="leading-relaxed mb-3">{{ image.attributes.description }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End images contents -->

                                </div>
                                <!-- End image -->

                                <!-- Begin specifications -->
                                <div v-bind:class="{ 'hidden': tabs.openTab !== 3, 'block': tabs.openTab === 3 }">

                                    <!-- Begin specification form -->
                                    <div class="mb-3">
                                        <form @submit.prevent="createSpecification">
                                            <div class="bg-white rounded">

                                                <!-- Begin form contents -->
                                                <div class="mb-5">

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
                                                                <span v-if="specifications.specifications.length === 0" class="uppercase text-xxxs font-bold">Click here to add specification(s)</span>
                                                                <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                                                            </button>
                                                        </div>
                                                        <!-- End add button -->

                                                    </div>
                                                    <!-- End header contents -->

                                                    <!-- Begin form -->
                                                    <div v-for="( spec, index ) in specifications.specifications" :key="index" class="flex grid grid-cols-2 gap-5 justify-evenly items-center py-1 text-xs">

                                                        <!-- Begin specification -->
                                                        <div class="mt-1">
                                                            <label class="text-gray-500 text-xs">Specification</label>
                                                            <div class="flex mt-1">
                                                                <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
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
                                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
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
                                                <!-- End form contents -->

                                                <!-- Begin submit button -->
                                                <div v-if="specifications.specifications.length != 0" class="border-gray-200">
                                                    <div class="flex text-left">
                                                        <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                                                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                                            <span class="uppercase text-xxxs">
                                                                <span v-if="specifications.loader.isLoading === false">Create Specification(s)</span>
                                                                <span v-else><moon-loader :loading="specifications.loader.loading" :color="specifications.loader.color" :size="specifications.loader.size"></moon-loader></span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- Begin submit button -->

                                            </div>
                                        </form>
                                    </div>
                                    <!-- End specification form -->

                                    <!-- Begin specification contents -->
                                    <div class="mt-5">
                                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                <table class="w-full divide-y divide-gray-200">
                                                    <tbody class="bg-white divide-y divide-gray-200 text-xs">
                                                        <tr v-for="product in product.specifications" :key="product.id" class="border rounded">
                                                            <td class="px-4 py-3 bg-gray-100 border-r border-b w-1/2">
                                                                <div class="flex items-center">
                                                                    <div class="text-gray-900">{{product.attributes.specification}}</div>
                                                                </div>
                                                            </td>
                                                            <td class="px-4 py-2 border-b w-1/2">
                                                                <div class="font-medium text-gray-900 font-bold">{{product.attributes.value}}</div>
                                                            </td>
                                                            <td class="px-4 py-2 border-b">
                                                                <div class="font-medium text-gray-900 font-bold">
                                                                  <button type="button" class="flex items-center rounded bg-red-500 text-white font-bold px-2 py-1 focus:outline-none hover:bg-red-600">
                                                                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                                      <span class="uppercase text-xxxs font-bold">Delete</span>
                                                                  </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End specification contents -->

                                </div>
                                <!-- End specifications -->

                                <!-- Begin overviews -->
                                <div v-bind:class="{ 'hidden': tabs.openTab !== 4, 'block': tabs.openTab === 4 }">

                                    <!-- Begin overview form -->
                                    <div>
                                        <form @submit.prevent="createOverview">
                                            <div class="bg-white rounded">

                                                <!-- Begin form contents -->
                                                <div class="mb-5">

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
                                                                <span v-if="overviews.overviews.length === 0" class="uppercase text-xxxs font-bold">Click here to add overview(s)</span>
                                                                <span v-else class="uppercase text-xxxs font-bold">Add more</span>
                                                            </button>
                                                        </div>
                                                        <!-- End add button -->

                                                    </div>
                                                    <!-- End header contents -->

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
                                                <!-- End form contents -->

                                                <!-- Begin submit button -->
                                                <div v-if="overviews.overviews.length != 0" class="">
                                                    <div class="flex text-left">
                                                        <button type="submit" class="flex items-center rounded bg-green-800 text-white font-bold px-5 py-2 mr-4 focus:outline-none hover:bg-green-700">
                                                            <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                                                            <span class="uppercase text-xxxs">
                                                                <span v-if="overviews.loader.isLoading === false">Add Overview(s)</span>
                                                                <span v-else><moon-loader :loading="overviews.loader.loading" :color="overviews.loader.color" :size="overviews.loader.size"></moon-loader></span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- Begin submit button -->

                                            </div>
                                        </form>
                                    </div>
                                    <!-- End overview form -->

                                    <!-- Begin overview contents -->
                                    <div>
                                        <div v-for="overview in product.overviews" :key="overview.attributes.resource_id" class="flex items-center justify-center border-b pb-3">
                                            <div class="flex flex-col bg-white py-5 rounded items-center">
                                                <h3 class="font-serif font-bold text-gray-900 text-2xl">{{ overview.attributes.title }}</h3>
                                                <p class="text-center leading-relaxed py-2">{{ overview.attributes.description }}</p>
                                                <img class="rounded" src="https://ae01.alicdn.com/kf/H595d729be06a4a01ac497f2ac5d3c7ffL.jpg" alt="motivation" />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End overview contents -->

                                </div>
                                <!-- End overviews -->

                                <!-- Begin reviews -->
                                <div v-bind:class="{ 'hidden': tabs.openTab !== 5, 'block': tabs.openTab === 5 }">
                                    <div v-for="review in 10" :key="review" class="flex mb-3">
                                        <div class="flex-1 border rounded px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                            <div class="flex items-center">
                                                <strong class="mr-2">Michael Kabutey</strong>
                                                <span class="text-xs text-gray-400 mr-2">3:34 PM</span>
                                                <span class="">
                                                    <div class="text-sm text-gray-500 flex">
                                                        <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                        <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                        <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                        <span><svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                        <span><svg class="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></span>
                                                    </div>
                                                </span>
                                            </div>
                                            <p class="text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                            <div class="mt-4 flex items-center float-right">
                                                <div class="mr-2">
                                                    <button type="button" class="flex items-center rounded bg-juaso-primary text-white font-bold px-2 py-1 focus:outline-none hover:bg-juaso-secondary">
                                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        <span class="uppercase text-xxxs font-bold">Delete</span>
                                                    </button>
                                                </div>
                                                <div class="">
                                                    <button type="button" class="flex items-center rounded bg-red-500 text-white font-bold px-2 py-1 focus:outline-none hover:bg-red-600">
                                                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                        <span class="uppercase text-xxxs font-bold">Delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End reviews -->

                            </div>
                        </div>
                    </div>
                    <!-- End tab contents -->

                </div>
            </div>
        </div>
    </div>
    <!-- End contents -->
  
</template>

<script>
    import { Notyf } from "notyf";
    import MoonLoader from 'vue-spinner/src/PulseLoader.vue'

    import { inject, onBeforeMount, reactive } from "vue";
    import axios from "axios";

    import router from "@/router";
    import { useRoute } from "vue-router";

    export default
    {
        name: "RightContent",
        components: { MoonLoader },

        setup()
        {
            const authentication = inject( 'authentication' )
            const route = useRoute()
            const store = inject( 'store' )
            const product = reactive( { id: null, attributes: [], categories: [], images: [], specifications: [], overviews: [], reviews: [] });

            const notification = new Notyf();
            const tabs = reactive({ openTab: 1 } )

            const specifications = reactive({ specifications: [], loader: { color: '#FFFFFF', size: '11px', loading: true, isLoading: false } })
            const overviews = reactive({ overviews: [], data: [], loader: { color: '#FFFFFF', size: '11px', loading: true, isLoading: false } })
            const images = reactive({ images: [], loader: { color: '#FFFFFF', size: '11px', loading: true, isLoading: false } })

            const createSpecification = () =>
            {
                specifications.loader.isLoading = true
                axios({ method: 'POST', url: 'product/' + product.attributes.resource_id +'/specifications', headers: {'Authorization': 'Bearer ' + authentication.state.token}, data: { data: { type: "Specification", specifications: { data: specifications.specifications }, relationships: { product: { product_id: product.id }}} }} )
                    .then( response =>
                    {
                        if ( response.data.status === "Success" )
                        {
                            specifications.specifications = []
                            product.specifications = response.data.data
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Specification(s) created</p>', duration: 10000, ripple: false, dismissible: true })
                            specifications.loader.isLoading = false
                        }
                        else
                        {
                            specifications.loader.isLoading = false
                            console.log( response.data )
                        }
                    })
                    .catch( error =>
                    {
                        specifications.loader.isLoading = false
                        console.log( error.response )
                    })
            }
            const addSpecification = () =>
            {
                specifications.specifications.push(
                {
                    specification: "", value: "",
                });
            }
            const removeSpecification = ( index ) =>
            {
                specifications.specifications.splice( index, 1 );
            }

            const createOverview = () =>
            {
                overviews.loader.isLoading = true
                let formData = new FormData();
                for( var i = 0; i < overviews.overviews.length; i++ )
                {
                    formData.append( 'product_id', product.id )
                    formData.append( 'title[' + i + ']', overviews.overviews[i]['title'])
                    formData.append( 'description[' + i + ']', overviews.overviews[i]['description'])
                    formData.append( 'file[' + i + ']', overviews.overviews[i]['file'])
                }
                axios({ method: 'POST', url: 'product/' + product.attributes.resource_id +'/overviews', headers: {'Authorization': 'Bearer ' + authentication.state.token}, data: formData })
                    .then( response =>
                    {
                        if ( response.data.status === "Success" )
                        {
                            overviews.overviews = []
                            product.overviews = response.data.data
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Overviews(s) created</p>', duration: 10000, ripple: false, dismissible: true })
                            overviews.loader.isLoading = false
                        }
                        else
                        {
                            overviews.loader.isLoading = false
                            console.log( response )
                        }
                    })
                    .catch( error =>
                    {
                        console.log( error.response )
                    })
            }
            const addOverview = () =>
            {
                overviews.overviews.push(
                {
                    title: "",
                    description: "",
                    file: null
                });
            }
            const removeOverview = ( index ) =>
            {
                overviews.overviews.splice( index, 1 );
            }
            const setOverviewFilename = ( event, overview ) =>
            {
                const file = event.target.files[0];
                overview.file = file
            }

            const createImage = () =>
            {
                images.loader.isLoading = true
                let formData = new FormData();
                for( var i = 0; i < images.images.length; i++ )
                {
                    formData.append( 'product_id', product.id )
                    formData.append( 'description[' + i + ']', images.images[i]['description'] )
                    formData.append( 'file[' + i + ']', images.images[i]['file'] )
                }
                axios({ method: 'POST', url: 'product/' + product.attributes.resource_id +'/images', headers: {'Authorization': 'Bearer ' + authentication.state.token}, data: formData } )
                    .then( response =>
                    {
                        if ( response.data.status === "Success" )
                        {
                            images.images = []
                            product.images = response.data.data
                            notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">New images(s) created</p>', duration: 10000, ripple: false, dismissible: true })
                            images.loader.isLoading = false
                        }
                        else
                        {
                            images.loader.isLoading = false
                            console.log( response )
                        }
                    })
                    .catch( error =>
                    {
                        console.log( error.response )
                    })
            }
            const addFile = () =>
            {
                images.images.push(
                {
                    type: "File",
                    description: "",
                    file: { name: 'Choose File' }
                });
            }
            const removeFile = ( index ) =>
            {
                images.images.splice( index, 1 );
            }
            const setFilename = ( event, image ) =>
            {
                const file = event.target.files[0]
                image.file = file
            }

            const toggleTabs = ( tabNumber ) =>
            {
                tabs.openTab = tabNumber
            }

            onBeforeMount(() =>
            {
                axios({ method: 'GET', url: 'store/' + authentication.state.user.include.store.attributes.resource_id + '/products/' + route.params.product + '?include=categories,specifications,overviews,reviews,images', headers: { 'Authorization': 'Bearer ' + authentication.state.token } })
                    .then( response =>
                    {
                        if ( response.data.code === 200 || response.data.status === "Success" )
                        {
                            product.id = response.data.data.id
                            product.attributes = response.data.data.attributes
                            product.categories = response.data.data.include.categories
                            product.images = response.data.data.include.images
                            product.specifications = response.data.data.include.specifications
                            product.overviews = response.data.data.include.overviews
                            product.reviews = response.data.data.include.reviews
                        }
                        else
                        {
                            console.log( response.data )
                            router.replace('/404' )
                        }
                    })
                    .catch( error =>
                    {
                        console.log( error.response );
                    })
            })

            return {  authentication, store, tabs, product, toggleTabs, specifications, createSpecification, addSpecification, removeSpecification, overviews, createOverview, addOverview, removeOverview, setOverviewFilename, images, createImage, addFile, removeFile, setFilename }
        }
    }
</script>

<style scoped>
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