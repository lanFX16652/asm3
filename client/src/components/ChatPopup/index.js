import React, { useEffect, useState } from "react";
import classes from "./ChatPopup.module.css";
import { Outlet } from "react-router-dom";
import { CloseCircleOutlined, MessageTwoTone } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";
import { MessageInput } from "./MessageInput";
import { MessageItem } from "./MessageItem";
import axiosInstance from "../../apis/axios";
import { LocalStorageService } from "../../services";

const ChatPopup = () => {
  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessage] = useState([]);
  const roomId = LocalStorageService.load("roomId");

  useEffect(() => {
    axiosInstance.get(`chat/${roomId}`).then((result) => {
      setMessage(result.data.messages);
    });
  }, [roomId]);

  return (
    <>
      <Outlet />
      <div className={classes.wrapper}>
        {openChat ? (
          <Card
            title={
              <Space
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                styles={{ item: { alignItems: "center" } }}
              >
                <Typography.Title level={5}>Customer Support</Typography.Title>
                <CloseCircleOutlined onClick={() => setOpenChat(false)} />
              </Space>
            }
            className={classes.popup}
          >
            <div className={classes["chat-view"]}>
              {messages?.map((message) => {
                return <MessageItem message={message} />;
              })}
            </div>

            <MessageInput messages={messages} setMessage={setMessage} />
          </Card>
        ) : (
          <MessageTwoTone
            onClick={() => setOpenChat(true)}
            style={{ fontSize: 50, cursor: "pointer" }}
          />
        )}
      </div>
    </>
  );
};

export default ChatPopup;
