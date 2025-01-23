import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/LandingPage.vue";
import Dashboard from "../views/Dashboard.vue";
import AuthRedirect from "../views/AuthRedirect.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/auth/redirect",
    name: "AuthRedirect",
    component: AuthRedirect
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('access_token');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to home page if trying to access dashboard without authentication
    next('/');
  } else {
    next();
  }
});

export default router;