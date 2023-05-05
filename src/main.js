import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "@/assets/style/main.scss"
import $ from 'jquery';
import Popper from 'popper.js';

global.$ = global.jQuery = $;
global.Popper = Popper;
createApp(App).use(store).mount('#app')
