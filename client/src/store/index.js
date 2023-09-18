
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { cartReducer } from "./cartSlice";
import { orderReducer } from "./orderSlice";
import { chatReducer } from './chatSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    chat: chatReducer
  },
}, {
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});


export default store;
