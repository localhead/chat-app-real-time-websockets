import React, { FC, memo, useEffect, useRef, useState } from "react";

import { PuffLoader } from "react-spinners";
import { useGetMessagesList } from "./hooks/useGetMessagesList";
import styles from "./styles.module.scss";
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

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const fetchData = JSON.parse(e.data) as MessageRecord[];

      const isUpdatedNeeded = messagesList.length !== fetchData.length;

      if (fetchData && isUpdatedNeeded) {
        setMessagesList((prev) => {
          return [...prev, ...fetchData];
        });
      }

      if (!isUpdatedNeeded) setMessagesList((prev) => prev);
    };

    ws.addEventListener("message", handleMessage);

    return () => {
      ws.removeEventListener("message", handleMessage);
      //ws.close();
    };
  }, [messagesList]);

  const items = useGetMessagesList(messagesList);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messagesList]);

  const isLoading = messagesList.length === 0;

  return (
    <div className={styles.container} {...restProps}>
      {isLoading ? (
        <div className={styles.loader}>
          <PuffLoader
            color={"white"}
            loading={true}
            size={45}
            cssOverride={{ background: "transparent" }}
            aria-label="загрузка"
            data-testid="loader"
          />
          <p className={styles["loader-title"]}>Идет загрузка чата...</p>
        </div>
      ) : (
        items
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export const ChatSection = memo(_ChatSection);
