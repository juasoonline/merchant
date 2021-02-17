<template>

    <!-- Begin contents -->
    <div class="flex bg-juaso-primary border-b">
        <div class="container mx-auto hidden lg:block">
            <div class="flex flex-row justify-between pt-3 pb-1">

                <!-- Begin left menu -->
                <nav>
                    <div class="container">
                        <div class="justify-items-end">
                            <ul class="">
                                <li class="topNave mr-3">
                                    <router-link to="/help" class="navLink">
                                        <svg class="w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Help</span>
                                    </router-link>
                                </li>
                                <li class="topNave">
                                    <router-link to="/buyer-protection" class="navLink border-l">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                        <span>Buyer Protection</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End left menu -->

                <!-- Begin right menu -->
                <nav>
                    <div class="container">
                        <div class="justify-items-end">
                            <ul class="text-gray-600 group inline-block">
                                <li class="topNave mr-3">
                                    <router-link to="/" class="navLink">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                        <span>Sell on Juasoonline</span>
                                    </router-link>
                                </li>
                                <li class="topNave">
                                    <router-link to="/" class="navLink border-l">
                                        <svg class="w-4 mx-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>                               </svg>
                                        <span>Download App</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End end menu -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default { name: "TopBar" }
</script>

<style scoped>
</style>