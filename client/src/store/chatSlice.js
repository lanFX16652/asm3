import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        socket: null,
        roomData: null
    },
    reducers: {
        setSocket: (state, action) => {
            state.socket = action.payload
        },
        setRoomData: (state, action) => {
            state.roomData = action.payload
        },
        updateMessages: (state, action) => {
            state.roomData = { ...state.roomData, messages: [...state.roomData.messages, action.payload] }
        }
    }
})

export const selectChatState = (state) => state.chat
export const chatReducer = chatSlice.reducer
export const { setSocket, setRoomData, updateMessages } = chatSlice.actions