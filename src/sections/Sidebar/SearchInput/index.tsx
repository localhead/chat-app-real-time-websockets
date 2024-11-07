import React, { FC, memo, useState } from "react";

import styles from "./styles.module.scss";

interface SearchBarProps {
  className?: string;
  style?: React.CSSProperties;
}

const _SearchInput: FC<SearchBarProps> = (props) => {
  const { ...restProps } = props;

  const [value, setValue] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={styles.input}
      value={value}
      placeholder="Поиск..."
      onChange={onChangeHandler}
      {...restProps}
    />
  );
};

export const SearchInput = memo(_SearchInput);
