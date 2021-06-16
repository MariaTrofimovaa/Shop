import CartPage from "../pages/cartPage/CartPage";
import HomePage from "../pages/homePage/HomePage";
import ProductsPage from "../pages/productsPage/ProductsPage";
import AdminPage from "../pages/adminPage/AdminPage.js";
import AuthPage from "../pages/authPage/AuthPage";

export const mainRotes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: HomePage,
  },

  {
    name: "Products",
    path: "/products",
    component: ProductsPage,
    exact: false,
  },
  {
    name: "Cart",
    path: "/cart",
    component: CartPage,
    exact: true,
  },
  {
    name: "Administration",
    path: "/admin",
    component: AdminPage,
    exact: true,
  },
  {
    name: "Registration",
    path: "/registration",
    component: AuthPage,
    exact: true,
  },
  {
    name: "Login",
    path: "/login",
    component: AuthPage,
    exact: true,
  },
];
