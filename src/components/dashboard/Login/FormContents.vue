<template>

    <!-- Begin form contents -->
    <section class="my-40">
        <div class="container flex m-auto justify-center px-64">
            <div class="flex grid-cols-2 bg-white rounded justify-evenly w-full">

                <!-- Begin form contents -->
                <div class="w-full p-20">

                    <!-- Begin logo -->
                    <div class="">
                        <img :src="mainLogo" alt="" class="h-12 py-1.5 mb-10">
                        <h1 class="font-bold text-xl text-gray-600">Welcome back!</h1>
                        <p class="text-xs text-gray-400">Enter your email address and password to access admin panel.</p>
                    </div>
                    <!-- End logo -->

                    <!-- Begin form -->
                    <div>
                        <form>
                            <div class="mt-6 text-sm">

                                <!-- Begin email -->
                                <div class="mt-2">
                                    <label class="text-gray-500 text-xs">Email Address</label>
                                    <div class="flex mt-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <input type="email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="example@example.com">
                                    </div>
                                </div>
                                <!-- End email -->

                                <!-- Begin password -->
                                <div class="mt-6">
                                    <div class="flex justify-between">
                                        <label class="text-gray-500 text-xs">Password</label>
                                        <router-link class="text-xs hover:text-juaso-secondary" to="/forgot-password">Forgot your password?</router-link>
                                    </div>
                                    <div class="flex mt-3">
                                        <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                        </div>
                                        <input type="password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="password">
                                    </div>
                                </div>
                                <!-- End password -->

                                <!-- Begin remember me -->
                                <div class="mt-6">
                                    <div class="flex">
                                        <div class="bg-white border rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                                            <input type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                                        </div>
                                      <div class="select-none"><p class="text-xs text-gray-400">Remember me</p></div>
                                    </div>
                                </div>
                                <!-- Begin remember me -->

                                <!-- Begin submit button -->
                                <div class="mt-6">
                                    <div class="flex mt-3">
                                        <button type="button" class="rounded bg-juaso-primary text-white font-bold px-3 py-2 w-full focus:outline-none hover:bg-juaso-secondary">Login</button>
                                    </div>
                                </div>
                                <!-- End submit button -->

                            </div>
                        </form>
                    </div>
                    <!-- End form -->

                </div>
                <!-- End form contents -->

                <!-- Begin login info -->
                <div class="bg-gray-100 w-full bg-opacity-50 rounded-r" style="background-image: url('./assets/img/backgrounds/login-bg.jpg'); background-size: cover;">
                </div>
                <!-- End login info -->

            </div>
        </div>
    </section>
    <!-- End form contents -->

</template>

<script>
    export default
    {
        name: "FormContents",
        data()
        {
            return {
                mainLogo: './assets/img/logo.png',
            }
        }
    }
</script>

<style scoped>
    input:checked + svg
    {
        display: block;
    }
</style>