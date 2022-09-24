<template>

    <!-- Begin top nav bar -->
    <div class="sticky top-0 z-40 bg-gray-50 shadow-sm py-5 px-6">
        <div class="flex justify-between text-center">

            <!-- Begin left option with search bar -->
            <div></div>
            <!-- End left option with search bar -->

            <!-- Begin right options -->
            <div class="flex">

                <!-- Begin notifications -->
                <div class="text-xs mr-5 dropMenu group">

                    <!-- Begin bell icon -->
                    <button class="flex text-sm text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
                    <!-- End bell icon -->

                    <!-- Begin notification contents -->
                    <div class="z-50 bg-white shadow-lg rounded right-20 w-96 mt-1 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">

                        <!-- Begin header -->
                        <div class="text-left p-3 border-b">
                            <h4 class="font-bold text-sm">Notifications</h4>
                        </div>
                        <!-- End header -->

                        <!-- Begin contents -->
                        <div class="">
                            <router-link to="" class="flex text-left hover:bg-gray-100 p-3 border-b items-center">
                                <div class="mr-3 rounded-full text-white p-2 bg-juaso-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div class="">
                                    <h4 class="font-bold text-sm">Some topic here</h4>
                                    <p class="text-xxs">While that’s partially true, not everything...</p>
                                    <p class="text-xxs text-gray-600">2 hours ago</p>
                                </div>
                            </router-link>
                            <router-link to="" class="flex text-left hover:bg-gray-100 p-3 border-b items-center">
                                <div class="mr-3 rounded-full text-white p-2 bg-green-800">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </div>
                                <div class="">
                                    <h4 class="font-bold text-sm">Someone just ordered some items</h4>
                                    <p class="text-xxs text-gray-600">2 hours ago</p>
                                </div>
                            </router-link>
                            <router-link to="" class="p-1 text-center items-center rounded-b">
                                <p class="font-light text-xs hover:text-juaso-secondary">View All</p>
                            </router-link>
                        </div>
                        <!-- End contents -->

                    </div>
                    <!-- End notification contents -->

                </div>
                <!-- End notifications -->

                <!-- Begin user info -->
                <div class="text-xs dropMenu group">

                    <!-- Begin user icon -->
                    <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img class="h-8 w-8 rounded-full" :src="files.userIconMale" alt="">
                    </button>
                    <!-- End user icon -->

                    <!-- Begin user drop menu -->
                    <div class="z-50 bg-white shadow-lg rounded right-6 w-52 mt-1 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">

                        <!-- Begin header contents -->
                        <div class="m-3 flex">

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
                        <!-- End header contents -->

                        <!-- Begin nav list -->
                        <ul class="w-full dropMenu text-gray-600 border-t">
                            <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                <router-link to="" class="flex hover:text-white hover:border-gray-600">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    My Account
                                </router-link>
                            </li>
                            <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                <router-link to="" class="flex hover:text-white hover:border-gray-600">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Settings
                                </router-link>
                            </li>
                            <li class="px-3 py-1.5 hover:bg-juaso-secondary">
                                <router-link to="" class="flex hover:text-white hover:border-gray-600">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                    Supports
                                </router-link>
                            </li>

                            <li class="px-3 py-1.5 hover:bg-juaso-secondary border-t rounded-b text-red-600 hover:text-white">
                                <a @click="signOut" class="flex w-full inline-block py-2 text-xs font-medium cursor-pointer">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    Log Out
                                </a>
                            </li>
                        </ul>
                        <!-- End nav list -->

                    </div>
                    <!-- End user drop menu -->

                </div>
                <!-- End user info -->

            </div>
            <!-- End right options -->

        </div>
    </div>
    <!-- End top nav bar -->

</template>

<script>
    import { inject, ref } from "vue";
    import router from "@/router";

    export default
    {
        name: "TopNavBar",
        setup()
        {
            const files = ref ({ userIconMale: '../assets/images/user-icon-male.png' })
            const authentication = inject( 'authentication' );

            const signOut = () =>
            {
                authentication.logoutUser().then(() => { router.replace('/login'); })
            }

            return { files, authentication, signOut }
        }
    }
</script>

<style scoped>
    .dropMenu.li>ul                 { transform: translatex(100%) scale(0) }
    .dropMenu.li:hover>ul           { transform: translatex(101%) scale(1) }
    .dropMenu.li > button svg       { transform: rotate(-90deg) }
    .dropMenu.li:hover > button svg { transform: rotate(-270deg) }

    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }
</style>