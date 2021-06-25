// import LaptopList from "../Components/laptopList/LaptopList";
// import PhoneList from "../Components/phoneList/PhoneList";
import { lazy } from "react";

export const productsRoutes = [
  {
    path: "/phones",
    name: "Phones",
    exact: true,
    component: lazy(() => import("../Components/phoneList/PhoneList")),
  },

  {
    path: "/laptop",
    name: "Laptops",
    exact: true,
    component: lazy(() => import("../Components/laptopList/LaptopList")),
  },
];
