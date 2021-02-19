<template>

    <!-- Begin main contents -->
    <div class="h-screen w-full">

          <!-- Begin top navbar section -->
          <top-nav-bar></top-nav-bar>
          <!-- End top navbar section -->

          <!-- Begin content header -->
          <section class="p-6">
              <div class="flex justify-between text-center">

                  <!-- Begin page title -->
                  <div class="font-bold text-xl text-gray-600">Dashboard</div>
                  <!-- End page title -->

                  <!-- Begin breadcrumb -->
                  <div class="text-xs text-gray-600">
                      <span class="">Dashboard</span>
                  </div>
                  <!-- End breadcrumb -->

              </div>
          </section>
          <!-- End content header -->

          <!-- Begin basic stats -->
          <section class="px-6">
              <div class="flex grid grid-cols-4 gap-5 justify-between">
                  <div class="bg-white rounded px-5 flex justify-between items-center">
                      <div class="w-full items-center">
                          <p class="text-sm mb-1">Total products online</p>
                          <h4 class="font-light text-3xl">20,000</h4>
                      </div>
                      <div class="items-center rounded-full bg-juaso-primary text-white p-3">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                      </div>
                  </div>
                  <div class="bg-white rounded p-3 flex justify-between items-center">
                      <div class="w-full items-center">
                          <p class="text-sm mb-1">Total products sold</p>
                          <h4 class="font-light text-3xl">20,000</h4>
                      </div>
                      <div class="items-center rounded-full bg-juaso-primary text-white p-3">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      </div>
                  </div>
                  <div class="bg-white rounded p-3 flex justify-between items-center">
                      <div class="w-full items-center">
                          <p class="text-sm mb-1">Total orders</p>
                          <h4 class="font-light text-3xl">20,000</h4>
                      </div>
                      <div class="items-center rounded-full bg-juaso-primary text-white p-3">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                      </div>
                  </div>
                  <div class="bg-white rounded p-3 flex justify-between items-center">
                      <div class="w-full items-center">
                          <p class="text-sm mb-1">Customers</p>
                          <h4 class="font-light text-3xl">20,000</h4>
                      </div>
                      <div class="items-center rounded-full bg-juaso-primary text-white p-3">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </div>
                  </div>
              </div>
          </section>
          <!-- End basic stats -->

    </div>
    <!-- Begin main contents -->

</template>

<script>
    import TopNavBar from "@/components/dashboard/Shared/TopNavBar";

    export default
    {
        name: 'Dashboard',
        components: { TopNavBar },
    }
</script>
