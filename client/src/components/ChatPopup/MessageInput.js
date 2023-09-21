import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../apis/axios'
import { LocalStorageService } from '../../services'
import { useDispatch } from 'react-redux'
import { setRoomData, updateMessages } from '../../store/chatSlice'

export const MessageInput = () => {
    const [roomId, setRoomId] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        const roomIdLocalStorage = LocalStorageService.load('roomId')

        if (roomIdLocalStorage) {
            setRoomId(roomIdLocalStorage)
        }
    }, [])

    const onChat = async (value, e) => {

        if (!value) return

        if (!roomId) {
            const response = await axiosInstance.post('/chat/create-room', {
                content: value,
                authorType: 'client'
            })

            LocalStorageService.store('roomId', response.data._id)
            setRoomId(response.data._id)
            dispatch(setRoomData(response.data))
        } else {
            const response = await axiosInstance.post('/chat/new-message', {
                content: value,
                roomId,
                authorType: 'client'
            })

            dispatch(updateMessages(response.data))
        }

        setContent('')
    }

    return (
        <Input.Search value={content} onChange={(e) => setContent(e.target.value)} allowClear enterButton="Send" onSearch={onChat} width={'100%'} placeholder="enter your message" />
    )
}
