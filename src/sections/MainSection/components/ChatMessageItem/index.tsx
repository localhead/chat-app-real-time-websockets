import React, { FC, memo } from "react";

import { placeHolderImage } from "../../../../utils/constantsGlobal";
import { MessageRecord } from "../ChatSection/types";

import styles from "./styles.module.scss";
interface ChatMessageItemProps {
  className?: string;
  style?: React.CSSProperties;

  message: MessageRecord["message"];
  photo: MessageRecord["photo"];
  userId: MessageRecord["userId"];
  userName: MessageRecord["userName"];
}

const OutgoingMessageComponent: FC<ChatMessageItemProps> = (props) => {
  const { message, photo, userId, userName, ...restProps } = props;
  return (
    <div className={styles["container-outgoing"]} {...restProps}>
      <div className={styles.right}>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

const IncomingMessageComponent: FC<ChatMessageItemProps> = (props) => {
  const { message, photo, userId, userName, ...restProps } = props;

  const image = photo ? photo : placeHolderImage("gray");

  return (
    <div className={styles["container-incoming"]} {...restProps}>
      <div className={styles.left}>
        <img src={image} className={styles.avatar} />
      </div>
      <div className={styles.right}>
        <h6 className={styles.name}>{userName}</h6>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

const _ChatMessageItem: FC<ChatMessageItemProps> = (props) => {
  const { message, photo, userId, userName, ...restProps } = props;

  const isCurrent = userId === 27336;

  return (
    <>
      {isCurrent ? (
        <OutgoingMessageComponent
          message={message}
          photo={photo}
          userId={userId}
          userName={userName}
          {...restProps}
        />
      ) : (
        <IncomingMessageComponent
          message={message}
          photo={photo}
          userId={userId}
          userName={userName}
          {...restProps}
        />
      )}
    </>
  );
};

export const ChatMessageItem = memo(_ChatMessageItem);
