import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Generale from "../views/Generale.vue";
import Responsable from "../views/Responsable.vue";
import Flotte from "../views/Flotte.vue";
import Document from "../views/Document.vue";
import Confirmation from "../views/Confirmation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/generale",
    name: "Generale",
    component: Generale
  },
  {
    path: "/responsable",
    name: "Responsable",
    component: Responsable
  },
  {
    path: "/flotte",
    name: "Flotte",
    component: Flotte
  },
  {
    path: "/document",
    name: "Document",
    component: Document
  },
  {
    path: "/confirmation",
    name: "Confirmation",
    component: Confirmation
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
