<template>

    <!-- Begin route contents -->
    <router-view></router-view>
    <!-- End route contents -->

</template>

<script>
    import { provide } from 'vue'
    import authentication from '@/store/authentication'
    import store from '@/store/store'

    export default
    {
        setup()
        {
            provide('authentication', authentication )
            provide( 'store', store )
        }
    }
</script>

<style lang="scss">
</style>
