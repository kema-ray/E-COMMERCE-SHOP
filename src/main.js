import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia'
import "./assets/index.css";

const app = createApp(App);
const pinia = createPinia()


app.use(router); // Register the router
app.use(pinia)
app.mount("#app");
