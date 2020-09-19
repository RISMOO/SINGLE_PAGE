import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"// vue router permet de lier une url a un composant

//////////////////BOOTSTRAP///////////
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
////////////////COMPONENTS////////////////////
import Home from "@/components/pages/Home"
import About from "@/components/pages/About"
import Photo from "@/components/posts/Photo"
import Sport from "@/components/posts/Sport"
import Voyage from "@/components/posts/Voyage"


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

//////////////////ROUTER/////////////////////
Vue.use(VueRouter)//on precise a vue d'utilser vue router

//on va mettre en relation l'adresse ave  le composant grace a notre tableau de routing
const routes=[
  {
    path:"/",component:Home  //j'ai creer un nouvel objet le chemin
  },
  {
    path:"/about",component:About  //j'ai creer un nouvel objet le chemin
  },
  {
    path:"/posts/Photo",component:Photo //j'ai creer un nouvel objet le chemin
  },
  {
    path:"/posts/Sport",component:Sport  //j'ai creer un nouvel objet le chemin
  },
  {
    path:"/posts/Voyage",component:Voyage  //j'ai creer un nouvel objet le chemin
  }
]

//on initialise le router avec le tableau de route creer au dessus

const router=new VueRouter({
  mode: "history",  //enleve le # dans lurl
  routes
})



Vue.config.productionTip = false

new Vue({  
  render: h => h(App),
  router:router // on precise a vue de charger notre router
}).$mount('#app')
