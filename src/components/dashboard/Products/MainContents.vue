<template>

    <!-- Begin main contents -->
    <div class="h-screen w-full">

        <!-- Begin top navbar section -->
        <top-nav-bar></top-nav-bar>
        <!-- End top navbar section -->

        <!-- Begin content header -->
        <section class="p-6">
            <div class="flex justify-between text-center">

                <!-- Begin page title -->
                <div class="font-bold text-xl text-gray-600">Products</div>
                <!-- End page title -->

                <!-- Begin breadcrumb -->
                <div class="text-xs text-gray-600">
                    <router-link to="/add-product" class="flex items-center rounded bg-juaso-primary text-white font-bold px-5 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                        <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                        <span class="uppercase text-xxs">Add Product</span>
                    </router-link>
                </div>
                <!-- End breadcrumb -->

            </div>
        </section>
        <!-- End content header -->

        <section class="p-6">
            <div class="container">
                <pre>{{ products }}</pre>
            </div>
        </section>

    </div>
    <!-- End main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import axios from "axios";

    export default
    {
        name: "MainContents",
        components: { TopNavBar },
        data(){ return{ products: [] } },
        methods:
        {
            getProducts()
            {
              axios( { method: 'GET', url: 'products', headers: {  } } )
                  .then( response => setTimeout( () => { this.products = response.data.data }, 1000 ) )
                  .catch ( function ( error ) { console.log( error ); } )
            }
        },
        created()
        {
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>