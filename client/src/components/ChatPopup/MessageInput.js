import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../apis/axios'
import { LocalStorageService } from '../../services'
import { useDispatch } from 'react-redux'
import { setRoomData, updateMessages } from '../../store/chatSlice'

export const MessageInput = () => {
    const [chatId, setchatId] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        const chatIdLocalStorage = LocalStorageService.load('chatId')

        if (chatIdLocalStorage) {
            setchatId(chatIdLocalStorage)
        }
    }, [])

    const onChat = async (value, e) => {

        if (!value) return

        if (!chatId) {
            const response = await axiosInstance.post('/chat/create-room', {
                content: value,
                authorType: 'Client'
            })

            LocalStorageService.store('chatId', response.data._id)
            setchatId(response.data._id)
            dispatch(setRoomData(response.data))
        } else {
            const response = await axiosInstance.post('/chat/new-message', {
                content: value,
                chatId,
                authorType: 'Client'
            })

            dispatch(updateMessages(response.data))
        }

        setContent('')
    }

    return (
        <Input.Search value={content} onChange={(e) => setContent(e.target.value)} allowClear enterButton="Send" onSearch={onChat} width={'100%'} placeholder="enter your message" />
    )
}
