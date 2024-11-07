import React, { FC, memo, useEffect, useRef, useState } from "react";

import { textAreaStyles } from "./calcStyles";

import { SendMessageIcon } from "../../../../packages/icons";
import styles from "./styles.module.scss";

export interface MessageCreationSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const MAX_TEXTAREA_HEIGHT = 150;

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const _MessageCreationSection: FC<MessageCreationSectionProps> = (props) => {
  const { ...restProps } = props;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [message, setMessage] = useState<string>("");

  const clickHandlerMessage = () => {
    if (message.trim() !== "") {
      ws.send(message);
      setMessage("");
    }
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      clickHandlerMessage();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(
        textareaRef.current.scrollHeight,
        MAX_TEXTAREA_HEIGHT
      );
      textareaRef.current.style.height = `${newHeight}px`; // Set height based on scrollHeight but limit to 500px
    }
  }, [message]); // Trigger re-calculation whenever message changes

  return (
    <div className={styles.container} {...restProps}>
      <textarea
        value={message}
        onChange={textAreaChangeHandler}
        onKeyDown={handleKeyDown}
        style={textAreaStyles(message, MAX_TEXTAREA_HEIGHT)}
        className={styles.textarea}
        ref={textareaRef}
      />
      <button onClick={clickHandlerMessage} className={styles.button}>
        <SendMessageIcon size={35} />
      </button>
    </div>
  );
};

export const MessageCreationSection = memo(_MessageCreationSection);
