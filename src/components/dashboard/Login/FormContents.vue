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
                        <p class="text-xs text-gray-400">Enter your email address and password to access admin panel.</p>
                    </div>
                    <!-- End logo -->

                    <!-- Begin form -->
                    <login-form></login-form>
                    <!-- End form -->

                </div>
                <!-- End form contents -->

                <!-- Begin login info -->
                <div class="w-full bg-gray-100 w-full bg-opacity-50 rounded-r">
                    <img src="assets/images/backgrounds/login-bg.jpg" class="rounded-r object-cover h-full">
                </div>
                <!-- End login info -->

            </div>
        </div>
    </section>
    <!-- End form contents -->

</template>

<script>
    import LoginForm from "@/components/dashboard/Login/LoginForm";
    export default
    {
        name: "FormContents",
        components: { LoginForm },
        setup()
        {
            const mainLogo = '../assets/images/logo.png'
            return { mainLogo }
        },
    }
</script>

<style scoped>
    input:checked + svg
    {
        display: block;
    }
</style>