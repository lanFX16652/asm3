import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { LocalStorageService, PRODUCT_STORAGE_KEY } from "../services";
import axiosInstance from "../apis/axios.js"

// const initialState = {
//   cart: LocalStorageService.load(PRODUCT_STORAGE_KEY) || [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const itemIdex = state.cart.findIndex(
//         (item) =>
//           item.productRender._id.$oid === action.payload.productRender._id.$oid
//       );
//       if (itemIdex >= 0) {
//         state.cart[itemIdex].cartQuantity += 1;
//       } else {
//         const tempProduct = { ...action.payload, cartQuantity: 1 };
//         state.cart.push(tempProduct);
//       }
//     },

//     removeItem(state, action) {
//       const nextCartItems = state.cart.filter(
//         (cartItem) =>
//           cartItem.productRender._id.$oid !==
//           action.payload.productRender._id.$oid
//       );
//       state.cart = nextCartItems;
//     },

//     incrementQuantity(state, action) {
//       const itemIdex = state.cart.findIndex(
//         (item) =>
//           item.productRender._id.$oid === action.payload.productRender._id.$oid
//       );
//       state.cart[itemIdex].cartQuantity += 1;
//     },

//     decrementQuantity(state, action) {
//       const itemIdex = state.cart.findIndex(
//         (item) =>
//           item.productRender._id.$oid === action.payload.productRender._id.$oid
//       );
//       if (state.cart[itemIdex].cartQuantity > 1) {
//         state.cart[itemIdex].cartQuantity -= 1;
//       } else if (state.cart[itemIdex].cartQuantity === 1) {
//         const nextCartItems = state.cart.filter(
//           (cartItem) =>
//             cartItem.productRender._id.$oid !==
//             action.payload.productRender._id.$oid
//         );
//         state.cart = nextCartItems;
//       }
//     },

//     getTotals(state, action) {
//       let { total, quantity } = state.cart.reduce(
//         (cartTotal, cart) => {
//           const { price, cartQuantity } = cart;
//           const itemTotal = cart.productRender.price * cart.cartQuantity;

//           cartTotal.total += itemTotal;
//           cartTotal.quantity += cartQuantity;

//           return cartTotal;
//         },
//         {
//           total: 0,
//           quantity: 0,
//         }
//       );

//       state.cartTotalQuantity = quantity;
//       state.cartTotalAmount = total;
//     },
//   },
// });

// //export State
// export const cartItems = (state) => state.cart.cart;
// export const quantity = (state) => state.cart.cartTotalQuantity;
// export const amount = (state) => state.cart.cartTotalAmount;

// //export Action

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeItem,
//   getTotals,
// } = cartSlice.actions;

// //export Reducer
// const cartReducer = cartSlice.reducer;
// export default cartReducer;


export const postAddItem = createAsyncThunk(
  'cart/add',
  async (cartData) => {
    const { productId, qty } = cartData
    try {

      const response = await axiosInstance.post('client/add-to-cart', {
        productId,
        qty
      })

      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

export const getCart = createAsyncThunk(
  'cart/getCart',
  async () => {
    try {

      const response = await axiosInstance.get('client/cart')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  cart: [],
  isLoading: false,
  totalCartItem: 0,
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart(state) {
      state.cart = []
      state.totalCartItem = 0
      state.totalPrice = 0
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAddItem.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(postAddItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.cart = action.payload.cart
        state.totalCartItem = action.payload.totalCartItem
        state.totalPrice = action.payload.totalPrice
      })
      .addCase(postAddItem.rejected, (state, action) => {
        state.isLoading = false
      })
      .addCase(getCart.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.cart = action.payload.cart
        state.totalCartItem = action.payload.totalCartItem
        state.totalPrice = action.payload.totalPrice
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const selectCart = (state) => state.cart.cart;
export const selectQtyCartItem = (state) => state.cart.totalCartItem
export const selectCartLoading = state => state.cart.isLoading

export const { resetCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer;
