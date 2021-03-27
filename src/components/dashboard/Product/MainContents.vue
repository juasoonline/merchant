<template>

    <!-- Begin main contents -->
    <div class="w-full">

        <!-- Begin top navbar section -->
        <top-nav-bar></top-nav-bar>
        <!-- End top navbar section -->

    </div>
    <!-- End main contents -->

</template>

<script>
    import { inject, reactive } from 'vue';
    import { useRoute } from 'vue-router'

    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";
    import { onBeforeMount } from 'vue'
    import axios from "axios";
    import router from "@/router";

    export default
    {
        name: "MainContents",
        components: { TopNavBar },

        setup()
        {
            const authentication = inject( 'authentication' )
            const product = reactive({ product: null })
            const route = useRoute()

            onBeforeMount(() =>
            {
                axios( { method: 'GET', url: 'products/' + route.params.product, headers: { 'Authorization': 'Bearer ' + authentication.state.token } } )
                    .then( response => {
                        if ( response.data.code === 200 || response.data.status === "Success" ){ product.product = response.data.data }
                        else { router.replace('/404' ) }
                    })
                    .catch( error => { console.log( error.response ); } )
            })
            return { product }
        }
    }
</script>

<style scoped>
</style>