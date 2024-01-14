import './assets/main.css'

import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowBarUp, SiGithub, ViFileTypeTailwind,ViFileTypeReactjs, ViFileTypeAngular,ViFileTypeJsOfficial,  ViFileTypeFirebase,  ViFileTypeTypescriptOfficial, ViFileTypeHtml, ViFileTypeCss, ViFileTypeScss2, ViFileTypeNode, ViFileTypeVue } from "oh-vue-icons/icons";
import App from './App.vue'
addIcons( BiArrowBarUp,SiGithub,ViFileTypeTailwind,  ViFileTypeReactjs,ViFileTypeAngular, ViFileTypeAngular,ViFileTypeJsOfficial, ViFileTypeFirebase ,ViFileTypeTypescriptOfficial, ViFileTypeHtml, ViFileTypeCss, ViFileTypeScss2, ViFileTypeNode, ViFileTypeVue);

const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.mount('#app')
