import React, { FC, memo } from "react";

import {
  placeHolderImage,
  sunflowerLink,
} from "../../../../utils/constantsGlobal";
import styles from "./styles.module.scss";

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Header: FC<HeaderProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div className={styles.container} {...restProps}>
      <div className={styles.content}>
        <img
          src={sunflowerLink ? sunflowerLink : placeHolderImage("dark")}
          className={styles.avatar}
        />
        <div className={styles["text-container"]}>
          <h6 className={styles.title}>Рабочий чат компании "ООО Подсолнух"</h6>
          <p className={styles.description}>25 участников, 3 в сети</p>
        </div>
      </div>
    </div>
  );
};

export const Header = memo(_Header);
