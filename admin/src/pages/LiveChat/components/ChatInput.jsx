import React, { useState } from "react";
import classes from "../LiveChat.module.css";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axios";
import { useDispatch } from "react-redux";
import { updateChatDetail } from "../../../store/chatSlice";

export const ChatInput = () => {
  const { chatId } = useParams();
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSendMessage = () => {
    if (!value) return;
    axiosInstance
      .post(`/chat/new-message`, {
        content: value,
        authorType: "Admin",
        chatId: chatId,
      })
      .then((res) => {
        dispatch(updateChatDetail({ chatId: chatId, message: res.data }));
      })
      .catch((err) => {
        console.log(err);
      });

    setValue("");
  };
  return (
    <div className={classes["chat-input"]}>
      <Input.TextArea
        placeholder="type and enter"
        style={{ resize: "none", borderBottomLeftRadius: 0 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div onClick={onSendMessage} className={classes["send-icon"]}>
        <SendOutlined />
      </div>
    </div>
  );
};
