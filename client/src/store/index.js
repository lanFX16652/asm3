
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import modalReducer from "./modalSlice";
import { cartReducer } from "./cartSlice";
import { orderReducer } from "./orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // modal: modalReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export default store;
