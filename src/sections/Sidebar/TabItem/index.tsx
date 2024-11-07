import React, { FC, memo } from "react";

import classNames from "classnames";
import styles from "./styles.module.scss";

interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;

  label: string;
  isActive: boolean;
}

const _TabItem: FC<TabItemProps> = (props) => {
  const { label, isActive, ...restProps } = props;

  return (
    <div
      className={classNames(styles.container, { [styles.active]: isActive })}
      {...restProps}
    >
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export const TabItem = memo(_TabItem);
