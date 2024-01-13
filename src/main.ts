import './assets/main.css'

import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypeJsOfficial,  ViFileTypeTypescriptOfficial, ViFileTypeHtml, ViFileTypeCss, ViFileTypeScss2, ViFileTypeNode, ViFileTypeVue } from "oh-vue-icons/icons";
import App from './App.vue'
addIcons( ViFileTypeJsOfficial,  ViFileTypeTypescriptOfficial, ViFileTypeHtml, ViFileTypeCss, ViFileTypeScss2, ViFileTypeNode, ViFileTypeVue);

app = createApp(App);

app.component('v-icon', OhVueIcon);

app.mount('#app')