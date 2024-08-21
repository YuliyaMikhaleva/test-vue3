import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/style.scss"
import router from './router';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.mount('body')
