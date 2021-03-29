<template>

    <!-- Begin contents -->
    <div class="sticky top-0 z-40 flex bg-white shadow">
        <div class="container mx-auto hidden lg:block">
            <div class="flex grid gap-5 grid-cols-2 py-3">

                <!-- Begin logo --->
                <div class="flex justify-start">
                    <router-link to="/" class="p-0 flex"><img :src="mainLogo" alt="" class="h-10 py-1.5"></router-link>
                </div>
                <!-- End logo --->

                <!-- Begin user shopping -->
                <div class="flex justify-end">
                    <ul class="userNav">
                        <li class="userLink relative mt-2"><router-link to="/">Home</router-link></li>
                        <li class="userLink relative mt-2"><router-link to="/news">News</router-link></li>
                        <li class="userLink relative mt-2"><router-link to="/support">Support</router-link></li>
                        <li class="userLink relative"><router-link to="/join" class="btn-juaso-primary">Join Juasoonline</router-link></li>
                        <li class="userLink relative"><router-link to="/login" class="btn-juaso">Login</router-link></li>
                    </ul>
                </div>
                <!-- Begin user shopping -->

            </div>
        </div>
    </div>
    <!-- End contents -->

</template>

<script>
    export default
    {
        name: "MainNav",
        data()
        {
            return {
                mainLogo: '../assets/img/logo.png',
            }
        }
    }
</script>

<style scoped>
</style>