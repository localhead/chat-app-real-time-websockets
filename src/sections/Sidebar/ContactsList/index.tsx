import React, { FC, memo, useState } from "react";

import classNames from "classnames";
import { INIT_CHAT_ID } from "../../../utils/constantsGlobal";
import { contactsMock } from "./constants";
import styles from "./styles.module.scss";

interface ContactsListProps {
  className?: string;
  style?: React.CSSProperties;
}

const _ContactsList: FC<ContactsListProps> = (props) => {
  const { ...restProps } = props;

  const [isActiveChat, setIsActiveChat] = useState<number>(INIT_CHAT_ID);

  return (
    <div className={styles.container} {...restProps}>
      {contactsMock.map((item) => {
        const isActive = item.id === isActiveChat;

        const changeActiveChat = () => {
          setIsActiveChat(item.id);
        };
        return (
          <div
            className={classNames(styles["contact-container"], {
              [styles.active]: isActive,
            })}
            onClick={changeActiveChat}
          >
            <img src={item.photo} className={styles.photo} />
            <div className={styles["right-side"]}>
              <div className={styles["top"]}>
                <h6 className={styles["name"]}>{item.name}</h6>
                <p className={styles["time"]}>{item.time}</p>
              </div>
              <div className={styles["bottom"]}>
                <p className={styles["last-message"]}>{item.lastMessage}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ContactsList = memo(_ContactsList);
