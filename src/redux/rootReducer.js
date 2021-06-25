import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import { profileReducer } from "./profile/profileReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  profile: profileReducer,
});

export default rootReducer;
