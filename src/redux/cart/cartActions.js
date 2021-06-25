import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction("cart/addToCart");
const removeFromCart = createAction("cart/removeFromCart");
const createOrder = createAction("cart/removeFromCart");

export { addToCart, removeFromCart, createOrder };

// ==========================================================

const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const CREATE_ORDER = "cart/createOrder";

export { ADD_TO_CART, REMOVE_FROM_CART, CREATE_ORDER };

// const addToCart = (product) => ({
//   type: ADD_TO_CART,
//   payload: product,
// });

// const removeFromCart = (id) => ({
//   type: REMOVE_FROM_CART,
//   payload: id,
// });

// const createOrder = (order) => ({
//   type: CREATE_ORDER,
//   payload: order,
// });
// export { addToCart, removeFromCart, createOrder };
