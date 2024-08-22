import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/style.scss"
import router from './router';
import {createPinia} from "pinia";

// createApp(App).mount('#app')
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount('body')
