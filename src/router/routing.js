import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Index.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: () =>
      import( /* webpackChunkName: "AddSmoothie" */ "../views/AddSmoothie.vue")
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    props: true,
    component: () =>
      import( /* webpackChunkName: "EditSmoothie" */ "../views/EditSmoothie.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;