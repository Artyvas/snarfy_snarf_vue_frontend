import Vue from "vue";
import VueRouter from "vue-router";
import CreateBooking from "../views/CreateBooking.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CreateBooking",
    component: CreateBooking,
  },
  {
    path: "/bookings",
    name: "Bookings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Bookings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
