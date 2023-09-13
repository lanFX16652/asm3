import React from "react";
import classes from "../LiveChat.module.css";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";

export const ChatInput = () => {
  return (
    <div className={classes["chat-input"]}>
      <Input.TextArea
        placeholder="type and enter"
        style={{ resize: "none", borderBottomLeftRadius: 0 }}
      />
      <div className={classes["send-icon"]}>
        <SendOutlined />
      </div>
    </div>
  );
};
