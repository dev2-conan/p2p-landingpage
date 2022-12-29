// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
    // server side rendering mode
    ssr: true,
  
    // css
    css: [
      'bootstrap/dist/css/bootstrap.css',
      'bootstrap-vue/dist/bootstrap-vue.css'
    ],

    alias: {
    'images': resolve(__dirname, './assets/images')
  }
    
})
