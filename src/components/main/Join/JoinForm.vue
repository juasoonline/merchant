<template>

    <!-- Begin form contents -->
    <section class="my-20">
        <div class="container m-auto">

            <!-- Begin form wrapper -->
            <div class="shadow p-5 rounded w-1/2 m-auto">

                <!-- Begin content header -->
                <div class="pb-3">
                    <h2 class="text-gray-700 font-bold text-xl">Join Now</h2>
                    <p class="text-xs">Follow the steps to complete your joining</p>
                </div>
                <!-- End content header -->

                <!-- Begin form contents -->
                <div class="border border-gray-200 rounded">

                    <!-- Begin steps -->
                    <div class="flex grid grid-cols-4 justify-between text-center my-5">
                        <div :class="step1.class"><h3 class="font-bold">Step 1</h3><p class="text-xs">Business information</p></div>
                        <div :class="step2.class"><h3 class="font-bold">Step 2</h3><p class="text-xs">Administrator information</p></div>
                        <div :class="step3.class"><h3 class="font-bold">Step 3</h3><p class="text-xs">Email Verification</p></div>
                        <div :class="step3.class"><h3 class="font-bold">Step 4</h3><p class="text-xs">Confirmation</p></div>
                    </div>
                    <!-- End steps -->

                    <!-- Begin business info form -->
                    <div v-if="step1.status === false" class="px-5 mb-5">
                        <form class="text-xs" @submit.prevent="createBusiness">

                            <!-- Begin business name -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="name">Business Name</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="name" v-model="businessInfo.name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business name">
                                </div>
                            </div>
                            <!-- End business name -->

                            <!-- Begin business name -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="doing_business_as">Doing Business As / As Known As</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="doing_business_as" v-model="businessInfo.doing_business_as" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Doing Business As">
                                </div>
                            </div>
                            <!-- End business name -->

                            <!-- Begin region -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="region">Select Region</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                                    </div>
                                    <select v-model="businessInfo.region" id="region" class="appearance-none border rounded-r px-3 py-2 w-full focus:outline-none">
                                        <option class="text-gray-100">Select region</option>
                                        <option value="Ahafo">Ahafo</option>
                                        <option value="Ashanti">Ashanti</option>
                                        <option value="Bono">Bono</option>
                                        <option value="Bono East">Bono East</option>
                                        <option value="Central">Bono East</option>
                                        <option value="Eastern">Eastern</option>
                                        <option value="Greater Accra">Greater Accra</option>
                                        <option value="North East">North East</option>
                                        <option value="Northern">Northern</option>
                                        <option value="Oti">Oti</option>
                                        <option value="Savannah">Savannah</option>
                                        <option value="Upper East">Upper East</option>
                                        <option value="Upper West">Upper West</option>
                                        <option value="Volta">Volta</option>
                                        <option value="Western">Western</option>
                                        <option value="Western North">Western North</option>
                                    </select>
                                </div>
                            </div>
                            <!-- End region -->

                            <!-- Begin city -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="city">Business City</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="city" v-model="businessInfo.city" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business city">
                                </div>
                            </div>
                            <!-- End city -->

                            <!-- Begin address -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="address">Business Address</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="address" v-model="businessInfo.address" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business address">
                                </div>
                            </div>
                            <!-- End address -->

                            <!-- Begin postal code -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="postal_code">Ghana Post Code</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="postal_code" v-model="businessInfo.postal_code" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business GPS code">
                                </div>
                            </div>
                            <!-- End postal code -->

                            <!-- Begin primary phone -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="primary_phone">Business Primary Phone</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="primary_phone" v-model="businessInfo.mobile_phone" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business primary phone">
                                </div>
                            </div>
                            <!-- End primary phone -->

                            <!-- Begin secondary phone -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="secondary_phone">Business Secondary Phone</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                                    </div>
                                    <input type="text" id="secondary_phone" v-model="businessInfo.other_phone" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business secondary phone">
                                </div>
                            </div>
                            <!-- End secondary phone -->

                            <!-- Begin web address -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="website">Business Website</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="website" v-model="businessInfo.website" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business website address">
                                </div>
                            </div>
                            <!-- End email -->

                            <!-- Begin email -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="email">Business Email Address</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="email" id="email" v-model="businessInfo.email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter business email address">
                                </div>
                            </div>
                            <!-- End email -->

                            <!-- Begin submit button -->
                            <div class="mt-6">
                                <div class="flex mt-3">
                                    <button type="button" @click="createBusiness" class="rounded bg-juaso-primary text-white font-bold px-3 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                                        <span v-if="loader.isLoading === false">Continue</span>
                                        <span v-else><moon-loader :loading="loader.loading" :color="loader.color" :size="loader.size"></moon-loader></span>
                                    </button>
                                </div>
                            </div>
                            <!-- End submit button -->

                        </form>
                    </div>
                    <!-- End business info form -->

                    <!-- Begin index admin info form -->
                    <div v-else-if="step2.status === false" class="px-5 mb-5">
                        <form class="text-xs" @submit.prevent="createAdmin">

                            <!-- Begin first name -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="first_name">First Name</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="first_name" v-model="storeAdminInfo.first_name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter first name">
                                </div>
                            </div>
                            <!-- End first name -->

                            <!-- Begin other names -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="other_names">Other Names</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="other_names" v-model="storeAdminInfo.other_names" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter other names">
                                </div>
                            </div>
                            <!-- End other names -->

                            <!-- Begin last name -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="last_name">Last Name</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="last_name" v-model="storeAdminInfo.last_name" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter last name">
                                </div>
                            </div>
                            <!-- End last name -->

                            <!-- Begin designation -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="designation">Designation / Position</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="designation" v-model="storeAdminInfo.designation" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter designation">
                                </div>
                            </div>
                            <!-- End designation -->

                            <!-- Begin mobile phone -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="mobile_phone">Mobile Phone</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="mobile_phone" v-model="storeAdminInfo.mobile_phone" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter mobile phone">
                                </div>
                            </div>
                            <!-- End mobile phone -->

                            <!-- Begin office phone -->
                            <div class="mt-3">
                                <label class="text-gray-500 text-xs" for="office_phone">Office Phone</label>
                                <div class="flex mt-1">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                    </div>
                                    <input type="text" id="office_phone" v-model="storeAdminInfo.office_phone" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter office phone">
                                </div>
                            </div>
                            <!-- End office phone -->

                            <!-- Begin email -->
                            <div class="mt-2">
                                <label class="text-gray-500 text-xs" for="store_admin_email">Email Address</label>
                                <div class="flex mt-2">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="email" id="store_admin_email" required v-model="storeAdminInfo.email" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter email address">
                                </div>
                            </div>
                            <!-- End email -->

                            <!-- Begin password -->
                            <div class="mt-5">
                                <label class="text-gray-500 text-xs" for="password">Password</label>
                                <div class="flex mt-2">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="password" id="password" required v-model="storeAdminInfo.password" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter password">
                                </div>
                            </div>
                            <!-- End password -->

                            <!-- Begin password_confirmation -->
                            <div class="mt-5">
                                <label class="text-gray-500 text-xs" for="password_confirmation">Confirm Password</label>
                                <div class="flex mt-2">
                                    <div class="w-12 z-10 text-center pointer-events-none flex items-center justify-center border-l border-t border-b rounded-l bg-gray-100">
                                        <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="password" id="password_confirmation" required v-model="storeAdminInfo.password_confirmation" class="border rounded-r px-3 py-2 w-full focus:outline-none" placeholder="Enter password again">
                                </div>
                            </div>
                            <!-- End password_confirmation -->

                            <!-- Begin submit button -->
                            <div class="mt-6">
                                <div class="flex mt-3">
                                    <button type="button" @click="createAdmin" class="rounded bg-juaso-primary text-white font-bold px-3 py-2 w-full focus:outline-none hover:bg-juaso-secondary">
                                        <span v-if="loader.isLoading === false">Continue</span>
                                        <span v-else><moon-loader :loading="loader.loading" :color="loader.color" :size="loader.size"></moon-loader></span>
                                    </button>
                                </div>
                            </div>
                            <!-- End submit button -->

                        </form>
                    </div>
                    <!-- End index admin info form -->

                    <!-- Begin success info -->
                    <div v-else class="p-10">
                        <div class="items-center text-center w-1/6 m-auto">
                            <svg class="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>

                        <div class="text-center">
                            <h3 class="font-bold text-xl text-gray-600 py-5">Thank you for joining Juasoonline!</h3>
                            <p class="text-sm">We are incredibly excited to have you join us</p>
                            <p class="text-sm">Your application will be reviewed and processed with 48 hours</p>
                        </div>
                    </div>
                    <!-- End success info -->

                  </div>
                <!-- End form contents -->

            </div>
            <!-- End form wrapper -->

        </div>
    </section>
    <!-- End form contents -->

</template>

<script>
    import { Notyf } from 'notyf';
    import { reactive, ref } from 'vue'
    import axios from "axios";

    import MoonLoader from 'vue-spinner/src/PulseLoader.vue'

    export default
    {
        name: "JoinForm",
        components: { MoonLoader },
        setup()
        {
            const notification = new Notyf();
            const loader = reactive({ color: '#FFFFFF', size: '11px', loading: true, isLoading: false })

            const businessInfo    = ref({ name: "", doing_business_as: "", region: "", city: "", address: "", postal_code: "", mobile_phone: "", other_phone: "", email: "", website: "" })
            const storeAdminInfo  = ref({ store_resource_id: "", store_id: "", first_name: "", other_names: "", last_name: "", designation: "", mobile_phone: "", office_phone: "", email: "", password: "", password_confirmation: "" })

            const step1           = ref({ status: false, class: "wizard-active" })
            const step2           = ref({ status: false, class: "wizard-pending" })
            const step3           = ref({ status: false, class: "wizard-pending" })

            const createBusiness = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'stores', headers: {}, data: { data: { type: "Store", attributes: { name: businessInfo.value.name, doing_business_as: businessInfo.value.doing_business_as, region: businessInfo.value.region, city: businessInfo.value.city, address: businessInfo.value.address, postal_code: businessInfo.value.postal_code, mobile_phone: businessInfo.value.mobile_phone, other_phone: businessInfo.value.other_phone, email: businessInfo.value.email, website: businessInfo.value.website } } } })
                    .then( response => {
                    if ( response.data.status === "Success" )
                    {
                        storeAdminInfo.value.store_id = response.data.data.id;
                        storeAdminInfo.value.store_resource_id = response.data.data.attributes.resource_id;
                        step1.value.status = true;
                        step1.value.class = "wizard-success";
                        step2.value.class = "wizard-active";
                        notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Business information accept. Proceed with store administration information</p>', duration: 10000, ripple: false, dismissible: true })
                        loader.isLoading = false
                    }
                    else
                    {
                        loader.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        console.log( response.data );
                    }})
                    .catch( error =>
                    {
                        loader.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        console.log( error.response );
                    })
            }
            const createAdmin = () =>
            {
                loader.isLoading = true
                axios( { method: 'POST', url: 'stores/administrator', headers: {}, data: { data: { type: "StoreAdministrator", attributes: { store_resource_id: storeAdminInfo.value.store_resource_id, first_name: storeAdminInfo.value.first_name, other_names: storeAdminInfo.value.other_names, last_name: storeAdminInfo.value.last_name, designation: storeAdminInfo.value.designation, mobile_phone: storeAdminInfo.value.mobile_phone, office_phone: storeAdminInfo.value.office_phone, email: storeAdminInfo.value.email, password: storeAdminInfo.value.password, password_confirmation: storeAdminInfo.value.password_confirmation }, relationships: { store: { store_id: storeAdminInfo.value.store_id } } } } })
                    .then( response => {
                    if ( response.data.status === "Success" )
                    {
                        storeAdminInfo.value.shop_id = response.data.id;
                        step2.value.status = true;
                        step2.value.class = "wizard-success";
                        step3.value.class = "wizard-success";
                        notification.success({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">SUCCESS!</b><p class="text-xxs leading-4">Registration completed. We will respond within 72 hours.</p>', duration: 10000, ripple: false, dismissible: true })
                        loader.isLoading = false
                    }
                    else
                    {
                        loader.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        console.log( response )
                    }})
                    .catch( error =>
                    {
                        loader.isLoading = false;
                        notification.error({ position: { x: 'right', y: 'top', }, message: '<b class="text-xs leading-3">ERROR!</b><p class="text-xxs leading-4">Something went wrong. Try again later</p>', duration: 10000, ripple: false, dismissible: true })
                        console.log( error.response );
                    })
            }

            return { loader, businessInfo, storeAdminInfo, createBusiness, createAdmin, step1, step2, step3 }
        }
    }
</script>

<style scoped>
</style>