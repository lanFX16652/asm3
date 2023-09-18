import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  },
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const getSocket = (state) => {
  return state.socket.socket;
};

export const { setSocket } = socketSlice.actions;
export const socketReducer = socketSlice.reducer;
