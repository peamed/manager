import Vue from "vue";
import VueRouter from "vue-router";
import Default from "@/layout/Default.vue";
import Verification from "@/layout/Verification.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: Default
  },
  {
    path: "/verification",
    name: "verification",
    component: Verification
  }
];

const router = new VueRouter({
  routes
});

export default router;
