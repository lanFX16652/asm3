import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
    }
  },
});

// Select state currentUser from slice
export const selectUser = (state) => state;

//export Action
export const { setUser } = userSlice.actions;

//export Reducer
const userReducer = userSlice.reducer;

export default userReducer;
