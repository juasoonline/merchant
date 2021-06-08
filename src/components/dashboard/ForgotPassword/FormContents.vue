<template>

    <!-- Begin form contents -->
    <section class="my-40">
        <div class="container flex m-auto justify-center px-64">
            <div class="flex grid-cols-2 bg-white rounded justify-evenly w-full shadow rounded">

                <!-- Begin form contents -->
                <div class="w-full p-10">

                    <!-- Begin logo -->
                    <div class="pt-10">
                        <img :src="mainLogo" alt="" class="h-12 py-1.5 mb-10">
                        <h1 class="font-bold text-xl text-gray-600">Welcome back!</h1>
                        <p class="text-xs text-gray-400">Enter your email address to setup a new password.</p>
                    </div>
                    <!-- End logo -->

                    <!-- Begin form -->
                    <div>
                        <form @submit.prevent="getPassword">
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

                                <!-- Begin remember password -->
                                <div class="mt-6">
                                    <div class="flex">
                                        <div class="select-none"><p class="text-xs text-gray-400">Remember password? <router-link to="/login" class="text-juaso-primary hover:text-juaso-secondary">Login</router-link></p></div>
                                    </div>
                                </div>
                                <!-- Begin remember password -->

                                <!-- Begin submit button -->
                                <div class="mt-6">
                                    <div class="flex mt-3">
                                        <button type="button" @click="getPassword" class="rounded bg-juaso-primary text-white font-bold px-3 py-2 w-full focus:outline-none hover:bg-juaso-secondary">Get New Password</button>
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
                <div class="w-full bg-gray-100 w-full bg-opacity-50 rounded-r">
                    <img src="assets/images/backgrounds/login-bg.jpg" class="rounded-r object-cover">
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
        setup()
        {
            const mainLogo = '../assets/images/logo.png'
            const getPassword = () => {}

            return { mainLogo, getPassword }
        }
    }
</script>

<style scoped>
    input:checked + svg
    {
        display: block;
    }
</style>