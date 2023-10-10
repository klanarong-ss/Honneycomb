import { createRouter, createWebHistory } from "vue-router";
import HoneycombHome from "../views/HoneycombViews/HoneycombHome.vue";
import HoneycombLayout from "../components/HoneycombComponent/HoneycombLayout.vue";
import CafeLayout from "../components/CafeComponent/CafeLayout.vue";
import CafeIndex from "../views/CafeViews/CafeIndex.vue";

const routes = [
  {
    path: "/",
    name: "HoneycombLayout",
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "HoneycombLayout",
        redirect: "/home",
        component: HoneycombLayout,
        children: [
          {
            path: "/home",
            name: "HoneycombHome",
            component: HoneycombHome,
          },
        ],
      },
      {
        path: "/login",
        name: "LoginPage",
        component: () => import("../views/CommonViews/LoginPage.vue"),
      },
      {
        path: "/cafe",
        name: "CafeLayout",
        redirect: "/cafe/Index",
        component: () => import("../components/CafeComponent/CafeLayout.vue"),
        children: [
          {
            path: "/cafe/Index",
            name: "CafeIndex",
            component: CafeIndex,
          },
        ],
      },
      {
        path: "/farming",
        name: "FarmingLayout",
        redirect: "/farming/Index",
        component: () =>
          import("../components/FarmingComponent/FarmingLayout.vue"),
        children: [
          {
            path: "/farming/Index",
            name: "FarmingIndex",
            component: () => import("../views/FarmingViews/FarmingIndex.vue"),
          },
        ],
      },
      {
        path: "/apartment",
        name: "ApartmentLayout",
        redirect: "/apartment/home",
        component: () =>
          import("../components/ApartmentComponent/ApartmentLayout.vue"),
        children: [
          {
            path: "/apartment/home",
            name: "Home",
            component: () => import("../views/ApartmentViews/Home.vue"),
          },
          {
            path: "/apartment/dashboard",
            name: "Dashboard",
            component: () => import("../views/ApartmentViews/Dashboard.vue"),
          },
          {
            path: "/apartment/rental",
            name: "Rental",
            component: () => import("../views/ApartmentViews/Rental.vue"),
          },
          {
            path: "/apartment/billing",
            name: "Billing",
            component: () => import("../views/ApartmentViews/Billing.vue"),
          },
          {
            path: "/apartment/repair",
            name: "Repair",
            component: () => import("../views/ApartmentViews/Repair.vue"),
          },
          {
            path: "/apartment/setting",
            name: "Setting",
            component: () => import("../views/ApartmentViews/Setting.vue"),
          },
          {
            path: "/401page",
            name: "401Page",
            component: () => import("../views/CommonViews/401Page.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
