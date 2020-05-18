import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InfiniteScroll from '../views/infiniteScrollTest/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/infiniteScroll",
    name: "InfiniteScroll",
    component: InfiniteScroll
  },
  {
    path: "/lessPageA",
    name: "lessMixinTestA",
    component: () => import('../views/lessMixinTest/PageA.vue')
  },
  {
    path: "/lessPageB",
    name: "lessMixinTestB",
    component: () => import('../views/lessMixinTest/PageB.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
