import { useMemo } from "react";
import { ChatMessageItem } from "../../ChatMessageItem";
import { MessageRecord } from "../types";

export const useGetMessagesList = (messages: MessageRecord[] | []) => {
  if (!messages) return [];
  return useMemo(() => {
    return messages.map((item, index) => {
      return (
        <ChatMessageItem
          key={index}
          message={item.message}
          photo={item.photo}
          userId={item.userId}
          userName={item.userName}
        />
      );
    });
  }, []);
};
