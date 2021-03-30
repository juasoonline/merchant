<template>

    <!-- Begin contents -->
    <section class="px-6 mb-9">
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                    <!-- Begin items filter -->
                    <div class="bg-white p-5 rounded-t flex grid gap-5 grid-cols-4 justify-between items-center">

                        <!-- Begin search form -->
                        <div class="h-8 pl-3 pr-2 bg-white border flex justify-between items-center relative text-xs">
                            <input type="search" name="search" id="search" placeholder="Search products...." class="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
                            <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-4 h-4">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <!-- End search form -->

                        <!-- Begin display option -->
                        <div class="col-span-3 text-right">
                          <div class="relative inline-flex items-center">
                              <p class="mr-2 text-xs text-gray-600">Select item display options</p>
                              <svg class="w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
                                  <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/>
                              </svg>
                              <select class="border border-gray-300 text-gray-600 h-8 pl-3 pr-2 bg-white focus:outline-none appearance-none text-xs w-28">
                                  <option value="10">Select...</option>
                                  <option value="10" selected>10</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                  <option value="150">150</option>
                                  <option value="200">200</option>
                                  <option value="250">250</option>
                                  <option value="300">300</option>
                              </select>
                          </div>
                        </div>
                        <!-- End display option -->

                    </div>
                    <!-- End items filter -->

                    <!-- Begin product table list -->
                    <div class="overflow-hidden border-b border-gray-200 rounded-b">
                        <table class="min-w-full divide-y divide-gray-200">

                            <!-- Begin table header -->
                            <thead class="bg-white border-gray-200 border-t">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <!-- End table header -->

                            <!-- Begin table contents -->
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <router-link to="/product/09687309874">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                                                    <div class="text-sm text-gray-500">jane.cooper@example.com</div>
                                                </div>
                                            </div>
                                        </router-link>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                                        <div class="text-sm text-gray-500">Optimization</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div class="flex items-end justify-end">
                                            <router-link to="/">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                    </svg>
                                                </div>
                                            </router-link>
                                            <router-link to="/">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <!-- End table contents -->

                        </table>
                    </div>
                    <!-- End product table list -->

                </div>
            </div>
        </div>
    </section>
    <!-- End contents -->

</template>

<script>
export default {
name: "ProductsTable"
}
</script>

<style scoped>

</style>