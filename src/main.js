import { createApp } from 'vue'
import App from './App.vue'

import axios from "axios";
axios.defaults.baseURL = "https://test.api.juasoonline.com/web/";
// axios.defaults.baseURL = "http://api.juasoonline.test/web/";

import '../public/assets/css/tailwind.css'

import './registerServiceWorker'
import router from './router'

createApp( App ).use( router, axios ).mount( '#app' )
