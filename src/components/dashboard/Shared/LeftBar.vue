<template>

    <!-- Begin left contents -->
    <aside class="sticky top-0 z-40 h-screen w-1/6 border-gray-300 shadow bg-gray-50">
        <div class="">

            <!--Begin logo-->
            <div class="border-b border-gray-100 m-7">
                <router-link to="/dashboard" class="focus:outline-none">
                    <img :src="files.mainLogo" alt="" class="w-24 pb-4">
                </router-link>
            </div>
            <!--End logo-->

            <!-- Begin user info -->
            <div class="border-b border-gray-100 m-7 pb-7 flex">

                <!-- Begin user icon -->
                <div class="mr-4">
                    <div class="rounded-full">
                        <img :src="files.userIconMale" alt="" class="w-10">
                    </div>
                </div>
                <!-- End user icon -->

                <!-- Begin user name/role -->
                <div class="">
                    <h3 class="text-sm font-bold">{{ authentication.state.user.attributes.first_name }} {{ authentication.state.user.attributes.last_name }}</h3>
                    <p class="text-xs">{{ authentication.state.user.attributes.designation }}</p>
                </div>
                <!-- End user name/role -->

            </div>
            <!-- End user info -->

            <!-- Begin navigation -->
            <div class="mt-10">

                <!-- Begin dashboard nav -->
                <div class="mb-5">
                    <h2 class="font-light text-xs px-7 pb-3 uppercase">Navigation</h2>
                    <div class="hover:bg-blue-50 px-7 py-2">
                        <router-link to="/dashboard" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <p class="text-sm">Dashboard</p>
                        </router-link>
                    </div>
                </div>
                <!-- End dashboard nav -->

                <!-- Begin index nav -->
                <div class="mb-5">
                    <h2 class="font-light text-xs px-7 pb-3 uppercase">Store</h2>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/products" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <p class="text-sm">Manage Products</p>
                        </router-link>
                    </div>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/products/create" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path></svg>
                            <p class="text-sm">Create Products</p>
                        </router-link>
                    </div>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/orders" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <p class="text-sm">Manage Orders</p>
                        </router-link>
                    </div>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/customers" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <p class="text-sm">Customers</p>
                        </router-link>
                    </div>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/reports" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            <p class="text-sm">Reports</p>
                        </router-link>
                    </div>
                </div>
                <!-- End index nav -->

                <!-- Begin help and support nav -->
                <div class="mb-5">
                    <h2 class="font-light text-xs px-7 pb-3 uppercase">Help and Support</h2>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/dashboard" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <p class="text-sm">How To's</p>
                        </router-link>
                    </div>
                    <div class="hover:bg-blue-50 px-7 py-3">
                        <router-link to="/dashboard" class="flex w-full items-center text-gray-600">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            <p class="text-sm">Support</p>
                        </router-link>
                    </div>
                </div>
                <!-- End help and support nav -->

            </div>
            <!-- End navigation -->

        </div>
    </aside>
    <!-- End left contents -->

</template>

<script>
    import { ref, inject } from 'vue'
    export default
    {
        name: "LeftBar",
        setup()
        {
            const files = ref ({ mainLogo: '../assets/images/logo.png', userIconMale: '../assets/images/user-icon-male.png' })
            const authentication = inject( 'authentication' );

            return { files, authentication }
        }
    }
</script>

<style scoped>
    .dropdown:hover .dropdown-menu { display: block; }

    .dropMenu.li>ul                 { transform: translatex(100%) scale(0) }
    .dropMenu.li:hover>ul           { transform: translatex(101%) scale(1) }
    .dropMenu.li > button svg       { transform: rotate(-90deg) }
    .dropMenu.li:hover > button svg { transform: rotate(-270deg) }

    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
</style>