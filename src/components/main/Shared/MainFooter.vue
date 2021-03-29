<template>

    <!-- Begin upper footer contents -->
    <footer class="bg-juaso-extra">
        <div class="container py-20 m-auto text-gray-800">
            <div class="flex flex-col grid gap-6 grid-cols-5">

                <!-- Begin get app contents -->
                <div class="">

                    <!-- Begin header -->
                    <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Get the APP</div>
                    <!-- End header -->

                    <!-- Begin contents -->
                    <div class="">
                        <div class="inline-block">
                            <p class="text-gray-200 text-sm">Juasoonline app is now available on Google Play & App Store. Get it now.</p>
                        </div>

                        <div class="my-3">
                            <router-link to="/"><img :src="AppStoreLogo" alt="" class="mb-2"></router-link>
                            <router-link to="/"><img :src="PlayStoreLogo" alt=""></router-link>
                        </div>
                    </div>
                    <!-- End contents -->

                </div>
                <!-- End get app contents -->

                <!-- Begin customer service -->
                <div class="">

                    <!-- Begin header -->
                    <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Customer Service</div>
                    <!-- End header -->

                    <!-- Begin links -->
                    <div class="">
                        <router-link to="/customer-service" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Customer service</router-link>
                        <router-link to="/seller-information" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Seller Information Center</router-link>
                        <router-link to="/product-recalls" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Product Recalls</router-link>
                        <router-link to="/faq" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Help & FAQs</router-link>
                        <router-link to="/contacts" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Contact us</router-link>
                    </div>
                    <!-- End links -->

                </div>
                <!-- End customer service -->

                <!-- Begin my account -->
                <div class="">

                    <!-- Begin header -->
                    <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">My Account</div>
                    <!-- End header -->

                    <!-- Begin links -->
                    <div class="">
                        <router-link to="/account" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">My Account</router-link>
                        <router-link to="/cart" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Shopping Cart</router-link>
                        <router-link to="/wishlist" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Wish List</router-link>
                        <router-link to="/order-history" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Order history</router-link>
                        <router-link to="/buyer-protection" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Buyer Protection</router-link>
                    </div>
                    <!-- End links -->

                </div>
                <!-- End my account -->

                <!-- Begin get to know us -->
                <div class="">

                    <!-- Begin header -->
                    <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Get to Know Us</div>
                    <!-- End header -->

                    <!-- Begin links -->
                    <div class="">
                        <router-link to="/about-juasoonline" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">About Juasoonline</router-link>
                        <router-link to="/career" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Career Opportunities</router-link>
                        <router-link to="/sell-on-juasoonline" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Sell Your Products</router-link>
                        <router-link to="/blog" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Blog</router-link>
                        <router-link to="/invest-relation" class="my-2 block text-gray-300 hover:text-juaso-secondary text-sm font-medium duration-700">Investor Relation</router-link>
                    </div>
                    <!-- End links -->

                </div>
                <!-- End get to know us -->

                <!-- Begin contact information -->
                <div class="">

                      <!-- Begin header -->
                      <div class="text-xs w-full text-gray-200 text-sm font-bold mb-6">Contact Information</div>
                      <!-- End header -->

                      <!-- Begin links -->
                      <div class="">
                          <div class="flex">
                              <svg class="w-11 h-11 text-gray-200" fill="none" stroke="currentColor" viewBox="5 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                              </svg>
                              <span class="text-gray-200">
                                  <p class="text-sm">Hotline Free 24/24</p>
                                  <p class="font-medium font-bold">0302 234 567</p>
                              </span>
                          </div>
                          <div class="flex mt-3">
                              <svg class="w-8 h-8 text-gray-200 mr-3" fill="none" stroke="currentColor" viewBox="2 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                              </svg>
                              <span class="text-gray-200">
                                  <p class="text-sm">info@juasoonline.com</p>
                                  <p class="text-sm">marketing@juasoonline.com</p>
                              </span>
                          </div>
                          <div class="mt-3">
                              <p class="text-gray-200 text-xs font-bold">Follow Us:</p>
                              <div class="mt-1">
                                  <router-link to="/" class="text-3xl text-white mr-3 hover:text-juaso-secondary"><i class="fab fa-facebook-square"></i></router-link>
                                  <router-link to="/" class="text-3xl text-white mr-3 hover:text-juaso-secondary"><i class="fab fa-twitter-square"></i></router-link>
                                  <router-link to="/" class="text-3xl text-white mr-3 hover:text-juaso-secondary"><i class="fab fa-linkedin"></i></router-link>
                                  <router-link to="/" class="text-3xl text-white mr-3 hover:text-juaso-secondary"><i class="fab fa-instagram"></i></router-link>
                              </div>
                          </div>
                    </div>
                    <!-- End links -->

                </div>
                <!-- End contact information -->

            </div>
        </div>
    </footer>
    <!-- End upper footer contents -->

    <!-- Begin lower footer contents -->
    <footer class="bg-juaso-primary">

        <!-- Begin company and site info -->
        <div class="container py-20 m-auto text-gray-800 flex flex-wrap flex-col grid gap-16 grid-cols-12">

            <!-- Begin about us -->
            <div class="text-gray-300 col-span-2">
                <router-link to="/"><img :src="LogoFooter" alt="" class="mb-2"></router-link>
            </div>
            <!-- End about us -->

            <!-- Begin policies contents -->
            <div class="text-gray-100 col-span-10">
                <h1 class="font-bold mb-2">About Juasoonline</h1>
                <p class="text-sm text-gray-300">Juasoonline offers its millions of registered users a comprehensive selection of the latest consumer electronics, entertainment, fashion, Jewel / Watches and many more products. Juasoonline is consistently ranked as one of the best online shopping destinations, and the company regularly earns industry-leading customer service ratings. Newegg is headquartered in City of Industry, California, with North American distribution facilities located throughout the United States and Canada.</p>
            </div>
            <!-- End policies contents -->

        </div>
        <!-- End company and site info -->

        <!-- Begin copyright -->
        <div class="container m-auto">
            <div class="flex m-auto sm:border-t border-gray-400 text-gray-400 text-sm flex-col">
                <div class="my-5">© Copyright. All Rights Reserved.</div>
            </div>
        </div>
        <!-- End copyright -->

    </footer>
    <!-- End lower footer contents -->

</template>

<script>
    export default
    {
        name: "MainFooter",
        data()
        {
            return {
                PlayStoreLogo: '../assets/img/icon-googleplay.png',
                AppStoreLogo: '../assets/img/icon-appstore.png',
                LogoFooter: '../assets/img/logo-footer.png',
            }
        }
    }
</script>

<style scoped>
</style>