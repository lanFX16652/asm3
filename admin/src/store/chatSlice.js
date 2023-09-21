import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");
global.socketInstance = socket

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatList: [],
    },
    reducers: {
        setRoomData: (state, action) => {
            state.roomData = action.payload
        },
        updateChatList: (state, action) => {
            if (action.payload.type === 'object') {
                state.chatList = [...state.chatList, action.payload.data]
            } else if (action.payload.type === 'array') {
                state.chatList = [...state.chatList, ...action.payload.data]
            }

        }
    }
})

export const selectChatState = (state) => state.chat
export const chatReducer = chatSlice.reducer
export const { setRoomData, updateChatList } = chatSlice.actions