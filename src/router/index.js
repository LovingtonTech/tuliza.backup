import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Contacts from "../views/Contacts.vue";
import Book from '../views/Book.vue'
import Login from "../views/admin-panel/Login.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/admin-panel/login",
  name:"Login",component: ()=>import("../views/admin-panel/Login.vue"),},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
