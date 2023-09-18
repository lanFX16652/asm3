import { Input } from "antd";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../apis/axios";
import { LocalStorageService } from "../../services";

export const MessageInput = ({ messages, setMessage }) => {
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const roomIdLocalStorage = LocalStorageService.load("roomId");

    if (roomIdLocalStorage) {
      setRoomId(roomIdLocalStorage);
    }
  }, []);

  const onChat = async (value, e) => {
    if (!value) return;

    if (!roomId) {
      const response = await axiosInstance.post("/chat/create-room", {
        content: value,
        authorType: "client",
      });

      LocalStorageService.store("roomId", response.data._id);
      setRoomId(response.data._id);
      setMessage(response.data.messages);
    } else {
      const response = await axiosInstance.post("/chat/new-message", {
        roomId: roomId,
        content: value,
        authorType: "client",
      });

      setMessage([...messages, response.data]);
    }
  };

  return (
    <Input.Search
      allowClear
      enterButton="Send"
      onSearch={onChat}
      width={"100%"}
      placeholder="enter your message"
    />
  );
};
