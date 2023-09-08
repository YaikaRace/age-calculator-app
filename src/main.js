import { createApp } from "vue";
import App from "./App.vue";
import Vue3Autocounter from "vue3-autocounter";
import "./assets/tailwind.css";

createApp(App).component("vue3-autocounter", Vue3Autocounter).mount("#app");
