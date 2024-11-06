import React, { FC, memo, useEffect, useRef, useState } from "react";

import { textAreaStyles } from "./calcStyles";
import "./styles.scss";

export interface MessageCreationSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const MAX_TEXTAREA_HEIGHT = 350;

const ws = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

const _MessageCreationSection: FC<MessageCreationSectionProps> = (props) => {
  const { ...restProps } = props;

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [message, setMessage] = useState<string>("");

  const clickHandlerMessage = () => {
    ws.send("фыыыы");
  };

  const textAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height before calculating
      const newHeight = Math.min(
        textareaRef.current.scrollHeight,
        MAX_TEXTAREA_HEIGHT
      );
      textareaRef.current.style.height = `${newHeight}px`; // Set height based on scrollHeight but limit to 500px
    }
  }, [message]); // Trigger re-calculation whenever message changes

  return (
    <div className="container" {...restProps}>
      <textarea
        value={message}
        onChange={textAreaChangeHandler}
        style={textAreaStyles(message, MAX_TEXTAREA_HEIGHT)}
        className="textarea"
        ref={textareaRef}
      />
      <button onClick={clickHandlerMessage}>Send</button>
    </div>
  );
};

export const MessageCreationSection = memo(_MessageCreationSection);
