import { createSlice, configureStore } from "@reduxjs/toolkit";

//Slice hiển thị Popup modal
const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalVisible: false, productContent: null },
  reducers: {
    toggleModal(state, payload) {
      state.isModalVisible = !state.isModalVisible;
      state.productContent = payload;
      console.log(payload);
    },
  },
});

//Export Actions
export const { toggleModal } = modalSlice.actions;

//export State
export const isModalVisible = (state) => state.isModalVisible;
export const productContent = (state) => state.productContent;

//export Reducer
const modalReducer = modalSlice.reducer;
export default modalReducer;

//Slice hiển thị sản phẩm theo category
/*
const categorySlice = createSlice({
  name: "category",
  initState: { showCategory: null },
  reuducers: {
    showCategoryProduct (state, payload) {
      mảng của ProductList .filter để lọc ra
    }
    
  }
  
});
*/
/*
const store = configureStore({
  reducer: modalSlice.reducer,
});
*/
//export default store;
