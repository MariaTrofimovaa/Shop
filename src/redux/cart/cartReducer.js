import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { addToCart, removeFromCart, createOrder } from "./cartActions";

const itemsReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCart]: (state, action) => [
    ...state.filter((item) => item.id !== action.payload),
  ],
  [createOrder]: () => []
});

// =======================================================
// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];

//     case REMOVE_FROM_CART:
//       return [...state.filter((item) => item.id !== action.payload)];

//     case CREATE_ORDER:
//       return []
    
//     default:
//       return state;
//   }
// };

const errorReducer = (state = "", action) => {
  return state;
};

const cartReducer = combineReducers({
  items: itemsReducer,
  error: errorReducer,
});

export default cartReducer;
