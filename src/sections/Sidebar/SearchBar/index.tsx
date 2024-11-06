import React, { FC, memo, useState } from "react";

import "./styles.scss";

interface SearchBarProps {
  className?: string;
  style?: React.CSSProperties;
}

const _SearchBar: FC<SearchBarProps> = (props) => {
  const { ...restProps } = props;

  const [value, setValue] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-bar" {...restProps}>
      <input
        className="input"
        value={value}
        placeholder="Поиск..."
        onChange={onChangeHandler}
      />
    </div>
  );
};

export const SearchBar = memo(_SearchBar);
