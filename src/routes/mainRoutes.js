import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Profile",
    path: "/profile",
    component: lazy(() => import("../pages/ProfilePage")),
    exact: true,
  },
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    exact: true,
  },
  {
    name: "Products",
    path: "/products",
    component: lazy(() => import("../pages/ProductsPage")),
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: lazy(() => import("../pages/CartPage")),
    exact: true,
  },
  {
    name: "Administration",
    path: "/admin",
    component: lazy(() => import("../pages/AdminPage")),
    exact: true,
  },
  {
    name: "Registration",
    path: "/registration",
    component: lazy(() => import("../pages/AuthPage")),
    exact: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/AuthPage")),
    exact: true,
  },
];
