import { lazy } from "react";

// import CartPage from "../pages/cartPage/CartPage";
// import HomePage from "../pages/homePage/HomePage";
// import ProductsPage from "../pages/products/Page/ProductsPage";
// import AdminPage from "../pages/adminPage/AdminPage.js";
// import AuthPage from "../pages/authPage/AuthPage";

// const HomePage =

export const mainRotes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(() => import("../pages/homePage/HomePage")),
  },

  {
    name: "Products",
    path: "/products",
    component: lazy(() => import("../pages/productsPage/ProductsPage")),
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: lazy(() => import("../pages/cartPage/CartPage")),
    exact: true,
  },
  {
    name: "Administration",
    path: "/admin",
    component: lazy(() => import("../pages/adminPage/AdminPage.js")),
    exact: true,
  },
  {
    name: "Registration",
    path: "/registration",
    component: lazy(() => import("../pages/authPage/AuthPage")),
    exact: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/authPage/AuthPage")),
    exact: true,
  },
];
