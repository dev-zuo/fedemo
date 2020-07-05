import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InfiniteScroll from "../views/infiniteScrollTest/index.vue";

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
    component: () => import("../views/lessMixinTest/PageA.vue")
  },
  {
    path: "/lessPageB",
    name: "lessMixinTestB",
    component: () => import("../views/lessMixinTest/PageB.vue")
  },
  {
    path: "/sessionTest",
    name: "sessionTest",
    component: () => import("../views/sessionFailureNewTabTest/")
  },
  {
    path: "/elementForm",
    name: "elementForm",
    component: () => import("../views/elementForm/")
  },
  {
    path: "/echarts",
    name: "echarts",
    component: () => import("../views/echarts/")
  },
  {
    path: "/elementTabs",
    name: "elementTabs",
    component: () => import("../views/elementTabs/")
  },
  {
    path: "/vuehooks",
    name: "vuehooks",
    component: () => import("../views/vuehooks/")
  },
  {
    path: "/componentAndIs",
    name: "componentAndIs",
    component: () => import("../views/componentAndIs/")
  },
  {
    path: "/vloading",
    name: "vloading",
    component: () => import("../views/vloading/")
  },
  {
    path: "/jsVueToast",
    name: "jsVueToast",
    component: () => import("../views/jsVueToast/")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
