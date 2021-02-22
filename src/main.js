import { createApp } from 'vue'
import App from './App.vue'

import axios from "axios";
axios.defaults.baseURL = "http://products.juasoonline.test/";

import '../public/assets/css/tailwind.css'

import './registerServiceWorker'
import router from './router'

createApp( App ).use( router, axios ).mount( '#app' )