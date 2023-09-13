import { Col, Input, Row } from "antd";
import React, { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatView } from "./components/ChatView";
import classes from "./LiveChat.module.css";
import { ChatList } from "./components/ChatList";

const LiveChat = () => {
  return (
    <div style={{ height: "100%" }}>
      <h3>Chat</h3>
      <Row className={classes["content-wrapper"]}>
        <Col className={classes["left-content"]} span={4}>
          <div className={classes["input-wrapper"]}>
            <Input placeholder="Search Contact" />
          </div>
          <ChatList />
        </Col>
        <Col className={classes["right-content"]} span={20}>
          <ChatView />
          <ChatInput />
        </Col>
      </Row>
    </div>
  );
};

export default LiveChat;
