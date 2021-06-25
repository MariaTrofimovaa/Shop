import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { getProductsByCategory} from "./productsActions"


const itemsReducer = createReducer({ phones: [], laptops: [] }, {
  [getProductsByCategory]: (state, action) => ({
        ...state,
        [action.payload.category] : action.payload.products
      })
});

// ===============================================================
// const itemsReducer = (state = { phones: [], laptops: [] }, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS_BY_CATEGORY:
//       return {
//         ...state,
//         [action.payload.category] : action.payload.products
//       }
  
//     default:
//       return state;
//   }  
  
// };

const errorReducer = (state = "", action) => {
  return state;
};

const productsReducer = combineReducers({
  items: itemsReducer,
  error: errorReducer,
});

export default productsReducer;