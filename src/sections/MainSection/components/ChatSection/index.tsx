import React, { FC, memo, useEffect, useState } from "react";

import { useGetMessagesList } from "./hooks/useGetMessagesList";
import "./styles.scss";
import { MessageRecord } from "./types";

interface ChatSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const _ChatSection: FC<ChatSectionProps> = (props) => {
  const { ...restProps } = props;

  const [messagesList, setMessagesList] = useState<MessageRecord[]>([]);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const fetchData = JSON.parse(e.data) as MessageRecord[];
      setMessagesList((prev) => [...prev, ...fetchData]); // Spread both the previous and fetched messages
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
      //ws.close();
    };
  }, []);

  const items = useGetMessagesList(messagesList);

  return (
    <div className="container-messages" {...restProps}>
      {items}
    </div>
  );
};

export const ChatSection = memo(_ChatSection);
