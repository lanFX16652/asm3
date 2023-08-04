import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageService, PRODUCT_STORAGE_KEY } from "../services";

const initialState = {
  cart: LocalStorageService.load(PRODUCT_STORAGE_KEY) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("AAAAAAA", action.payload);
      const itemIdex = state.cart.findIndex(
        (item) =>
          item.productRender._id.$oid === action.payload.productRender._id.$oid
      );
      if (itemIdex >= 0) {
        state.cart[itemIdex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
      }
    },

    removeItem(state, action) {
      const nextCartItems = state.cart.filter(
        (cartItem) =>
          cartItem.productRender._id.$oid !==
          action.payload.productRender._id.$oid
      );
      state.cart = nextCartItems;
    },

    incrementQuantity(state, action) {
      const itemIdex = state.cart.findIndex(
        (item) =>
          item.productRender._id.$oid === action.payload.productRender._id.$oid
      );
      state.cart[itemIdex].cartQuantity += 1;
    },

    decrementQuantity(state, action) {
      const itemIdex = state.cart.findIndex(
        (item) =>
          item.productRender._id.$oid === action.payload.productRender._id.$oid
      );
      if (state.cart[itemIdex].cartQuantity > 1) {
        state.cart[itemIdex].cartQuantity -= 1;
      } else if (state.cart[itemIdex].cartQuantity === 1) {
        const nextCartItems = state.cart.filter(
          (cartItem) =>
            cartItem.productRender._id.$oid !==
            action.payload.productRender._id.$oid
        );
        state.cart = nextCartItems;
      }
    },

    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, cartQuantity } = cart;
          const itemTotal = cart.productRender.price * cart.cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

//export State
export const cartItems = (state) => state.cart.cart;
export const quantity = (state) => state.cart.cartTotalQuantity;
export const amount = (state) => state.cart.cartTotalAmount;

//export Action

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotals,
} = cartSlice.actions;

//export Reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;
