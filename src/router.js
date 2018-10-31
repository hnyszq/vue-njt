import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Main from "./views/Main.vue";
import Message from "./views/Message.vue";
import Nav from "./views/Nav.vue";
import News from "./views/News.vue";
import Product from "./views/Product.vue";
import Relation from "./views/Relation.vue";
import About from './views/About.vue';



Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: "/",component: Login},
    {path: "/Login",component: Login},
    {path: "/Main",component: Main,children:[]},
    {path: "/Product",component: Product},
    {path:'/about',component:About},
    {path: "/Message",component: Message},
    {path: "/Nav",component: Nav},
    {path: "/News",component: News}, 
    {path: "/Relation",component: Relation},
  ]
});
