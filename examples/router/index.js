import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/layout"
  },
  {
    path: "/",
    redirect: "/layout"
  },
  {
    path: "/layout",
    component: Home,
  },
];

const router = new VueRouter({
  routes
});

export default router;
