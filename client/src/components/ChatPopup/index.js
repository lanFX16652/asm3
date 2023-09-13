import React, { useState } from 'react'
import classes from './ChatPopup.module.css'
import { Outlet } from 'react-router-dom'
import { CloseCircleOutlined, MessageTwoTone } from '@ant-design/icons'
import { Card, Space, Typography } from 'antd'
import { MessageInput } from './MessageInput'
import { LocalStorageService } from '../../services'

const ChatPopup = () => {
    const [openChat, setOpenChat] = useState(false)

    return (
        <>
            <Outlet />
            <div className={classes.wrapper} >
                {openChat ?
                    <Card
                        title={<Space style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }} styles={{ item: { alignItems: 'center', } }}  >
                            <Typography.Title level={5}>Customer Support</Typography.Title>
                            <CloseCircleOutlined onClick={() => setOpenChat(false)} />
                        </Space>}
                        className={classes.popup}
                    >
                        <div className={classes['chat-view']}>

                        </div>
                        <MessageInput />
                    </Card> :
                    <MessageTwoTone onClick={() => setOpenChat(true)} style={{ fontSize: 50, cursor: 'pointer' }} />}

            </div>
        </>
    )
}

export default ChatPopup