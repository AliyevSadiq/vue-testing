import { createApp } from 'vue'
import VueRouter from "vue-router";
import {privateInstance,publicInstance} from "@/config/axios";
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router)
    .use(VueRouter)
    .use({privateAxios:privateInstance,publicAxios:publicInstance})
    .mount('#app')
