<template>

    <!-- Begin top nav bar -->
    <div class="sticky top-0 z-40 bg-gray-50 shadow-sm py-5 px-6">
        <div class="flex justify-between text-center">

            <div></div>
            <div class="flex">
                <div class="text-xs mr-5 dropMenu group">
                    <button class="flex text-sm text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </button>
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
                </div>

                <div class="text-xs dropMenu group">
                    <button class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </button>
                    <div class="z-50 bg-white shadow-lg rounded right-6 w-52 mt-1 transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
                        <div class="text-juaso-primary font-bold pt-5 px-2.5 text-center">Welcome to Juasoonline</div>
                        <div class="m-auto flex pt-5 px-2.5 pb-3 border-b justify-center">
                            <router-link to="/register" class="justify-start inline-block mr-1 px-7 py-1 text-xs font-medium leading-4 text-center text-white transition bg-juaso-primary rounded shadow ripple hover:bg-juaso-secondary">Join</router-link>
                            <router-link to="/login" class="justify-end inline-block ml-1 px-7 py-1 text-xs font-medium leading-4 text-center text-white transition bg-juaso-secondary rounded shadow ripple hover:bg-juaso-primary">Login</router-link>
                        </div>
                        <ul class="w-full dropMenu text-gray-600">
                            <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/stores" class="flex hover:text-white hover:border-gray-600">My Favorite Stores</router-link></li>
                            <li class="px-3 py-1.5 hover:bg-juaso-secondary"><router-link to="/coupons" class="flex hover:text-white hover:border-gray-600">My Coupons</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End top nav bar -->

</template>

<script>
    export default
    {
        name: "TopNavBar"
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