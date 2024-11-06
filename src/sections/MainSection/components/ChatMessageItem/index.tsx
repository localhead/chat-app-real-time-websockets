import React, { FC, memo } from "react";

import { MessageRecord } from "../ChatSection/types";
import "./styles.scss";

interface ChatMessageItemProps {
  className?: string;
  style?: React.CSSProperties;

  message: MessageRecord["message"];
  photo: MessageRecord["photo"];
  userId: MessageRecord["userId"];
  userName: MessageRecord["userName"];
}

const _ChatMessageItem: FC<ChatMessageItemProps> = (props) => {
  const { message, photo, userId, userName, ...restProps } = props;

  return (
    <div className="container" {...restProps}>
      <div className="left">
        <img src={photo} className="avatar" />
      </div>
    </div>
  );
};

export const ChatMessageItem = memo(_ChatMessageItem);
