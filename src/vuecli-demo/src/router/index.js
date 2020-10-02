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
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("../views/tree/")
  },
  {
    path: "/table",
    name: "talbe",
    component: () => import("../views/table/")
  },
  {
    path: "/textarea_trim",
    name: "textarea_trim",
    component: () => import("../views/textarea_trim/")
  },
  {
    path: "/provide",
    name: "provide",
    component: () => import("../views/provide/")
  },
  {
    path: "/sameCompTabs",
    name: "sameCompTabs",
    component: () => import("../views/sameCompTabs/")
  },
  {
    path: "/keepAlive",
    name: "keepAlive",
    component: () => import("../views/keepAlive/"),
    children: [
      {
        path: "a",
        name: "keepAliveA",
        component: () => import("../views/keepAlive/comps/PageA.vue")
      },
      {
        path: "b",
        name: "keepAliveB",
        meta: {
          keepAlive: true,
          include: "PageB"
        },
        component: () => import("../views/keepAlive/comps/PageB.vue")
      },
      {
        path: "c",
        name: "keepAliveC",
        component: () => import("../views/keepAlive/comps/PageC.vue")
      }
    ]
  },
  {
    path: "/subcomp_samename",
    name: "subcomp_samename",
    component: () => import("../views/subcomp_samename/")
  },
  {
    path: "/at",
    name: "at",
    component: () => import("../views/at/")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
