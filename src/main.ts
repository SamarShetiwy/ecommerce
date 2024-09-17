import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import BootstrapVue3 from 'bootstrap-vue-3';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3);

app.mount('#app')
