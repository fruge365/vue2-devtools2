import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "index",
        name: "index",
        alias: "/",
        component: () => import("@/views/frontend/Index.vue"),
        meta: { title: "前端常用" },
      },
      {
        path: "frontend",
        name: "frontend",
        component: () => import("@/views/index/Index.vue"),
        // component: () => import("@/views/frontend/Index.vue"),
        // meta: { title: "前端常用" },
      },
      {
        path: "aline",
        name: "aline",
        component: () => import("@/views/aline/Aline.vue"),
        meta: { title: "常用正则" },
      },
      {
        path: "anli",
        name: "anli",
        component: () => import("@/views/anli/Index.vue"),
        meta: { title: "案例" },
      },
      {
        path: "backend",
        name: "backend",
        component: () => import("@/views/backend/BackEnd.vue"),
        meta: { title: "后端常用" },
      },
      {
        path: "hot",
        name: "hot",
        component: () => import("@/views/hot/Hot.vue"),
        meta: { title: "热点排行" },
      },
      {
        path: "history",
        name: "history",
        component: () => import("@/views/history/History.vue"),
        meta: { title: "更新日志" },
      },
      {
        path: "feedback",
        name: "feedback",
        component: () => import("@/views/feedback/Feedback.vue"),
        meta: { title: "留言反馈" },
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/about/About.vue"),
        meta: { title: "关于本站" },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
  },
  // vue 翻页时钟
  {
    path: "/test-clock-container",
    component: () => import("@/views/anli/test-clock-container.vue"),
  },
  // 简单模拟时钟
  {
    path: "/clock",
    component: () => import("@/views/anli/Clock.vue"),
  },
  // 淘宝买家秀
  {
    path: "/mjx",
    component: () => import("@/views/hide/Mjx.vue"),
  },
  // 抖音美女
  {
    path: "/mnsp",
    component: () => import("@/views/hide/Mnsp.vue"),
  },
  // ChatGpt | phind
  {
    path: "/phind",
    component: () => import("@/views/phind/index.vue"),
  },
  // 404页面
  //这个*匹配必须放在最后，将改路由配置放到所有路由的配置信息的最后，否则会其他路由path匹配造成影响。
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
