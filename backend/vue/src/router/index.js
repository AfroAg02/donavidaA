import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SolicitudView from "../views/SolicitudView.vue";
import GestionPrincipal from "../views/GestionPrincipalView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/inicio",
    name: "inicio",
    component: GestionPrincipal,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogInView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/solicitud",
    name: "solicitud",
    component: SolicitudView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
