import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { cartReducer } from "./cartSlice";
import { orderReducer } from "./orderSlice";
import { socketReducer } from "./socketSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    order: orderReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
