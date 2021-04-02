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
                        <label class="text-gray-500 text-xs typo__label">Category(s)</label>
                        <div class="flex mt-1">
                            <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            </div>

                            <div class="text-xs w-full">
                                <div class="">
                                    <div x-data="{ open: false }" class="relative">
                                        <div x-on:click="open = true" class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">Select category(s)</div>
                                        <div x-show.transition="open" x-on:click.away="open = false" class="absolute right-0 w-full py-2 bg-white border rounded-b shadow-xl px-2 overflow-hidden h-80 overflow-y-auto" style="margin-top: -1px">
                                            <div v-for="option in options" :key="option.id">
                                                <label class="inline-flex items-center w-full cursor-pointer">
                                                    <input type="checkbox" @change="checkAction( $event )" :id="option.category_id" class="form-checkbox h-5 w-5 text-blue-600">
                                                    <span class="ml-2 text-gray-700">{{ option.name }}</span>
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

</template>

<script>
    import { inject, onBeforeMount, reactive } from 'vue';

    import router from "@/router";
    import axios from "axios";

    export default
    {
        name: "CreateProductForm",
        setup()
        {
            const authentication = inject( 'authentication' )
            const store = inject( 'store' )

            const product = reactive({ product_id: null, name: "", quantity: "", sales_price: "", price: "", description: "", categories: [], specifications: [] })
            const value = reactive( { values: [] })
            const options = store.categories.categories

            const addProduct = () =>
            {
                axios({ method: 'POST', url: 'products', headers: { 'Authorization': 'Bearer ' + authentication.state.token }, data: { data: { type: "Product", attributes: { name: product.name, quantity: product.quantity, sales_price: product.sales_price, price: product.price, description: product.description }, relationships: { store: { store_id: authentication.state.user.include.store.id }, brand: {}, categories: { data: product.categories }} } } })
                    .then( response =>
                    {
                        if ( response.status === 200 || response.status === 201 )
                        {
                            router.replace('/product/' + response.data.data.attributes.resource_id )
                        }
                        else
                        {
                            //
                        }
                    })
                    .catch( error =>
                    {
                        console.log( error.response )
                    })
            }
            onBeforeMount(() => { store.getCategories() })
            const checkAction = ( event ) =>
            {
                if ( event.target.checked )
                {
                    product.categories.push({
                        type: "Category", category_id: event.target.id
                    });
                }
                else
                {
                  //
                }
            }

            return { authentication, product, addProduct, store, value, options, checkAction }
        }
    }
</script>

<style src="">

</style>