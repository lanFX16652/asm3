import React, { useEffect, useState } from "react";
import { useSocket } from "../../../components/AuthWrapper";
import axiosInstance from "../../../apis/axios";
import { Typography } from "antd";
import { styled } from "styled-components";

export const ChatList = () => {
  const socket = useSocket();
  const [listChat, setListChat] = useState([]);
  socket?.on("room-created", (data) => {
    setListChat([...listChat, data.newRoom]);
  });

  useEffect(() => {
    axiosInstance
      .get("/chat/list")
      .then((response) => {
        setListChat(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {listChat?.map((chat) => {
        return (
          <ChatItem>
            <Typography.Text ellipsis={{ tooltip: true }}>
              {chat._id}
            </Typography.Text>
          </ChatItem>
        );
      })}
    </div>
  );
};

const ChatItem = styled.div`
  padding: 10px 6px;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;
