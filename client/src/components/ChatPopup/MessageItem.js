import React from "react";
import { styled } from "styled-components";

export const MessageItem = ({ message }) => {
  return (
    <MessageItemStyled $message={message}>
      {message.authorType === "client" ? "You: " : "Supporter: "}
      {message.content}
    </MessageItemStyled>
  );
};

const MessageItemStyled = styled.div`
  margin-top: 8px;
  display: flex;
  margin-left: ${(props) =>
    props.$message.authorType === "client" ? "8px" : "0"};
  margin-right: ${(props) =>
    props.$message.authorType === "client" ? "0" : "8px"};
  justify-content: ${(props) =>
    props.$message.authorType === "client" ? "flex-start" : "flex-end"};
`;
