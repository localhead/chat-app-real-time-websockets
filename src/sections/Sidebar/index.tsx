import React, { FC, memo } from "react";
import { ListCatalogIcon } from "../../packages/icons";

import { ContactsList } from "./ContactsList";
import { SearchInput } from "./SearchInput";
import { tabMock } from "./constants";
import { useGetTabNodes } from "./hooks/useGetTabNodes";
import styles from "./styles.module.scss";

interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Sidebar: FC<SidebarProps> = (props) => {
  const { ...restProps } = props;

  const tabNodes = useGetTabNodes(tabMock);

  return (
    <div className={styles.sidebar} {...restProps}>
      <div className={styles["top-container"]}>
        <ListCatalogIcon size={35} className={styles["list-icon"]} />
        <SearchInput />
      </div>
      <div className={styles["tabs-list"]}>{tabNodes}</div>
      <ContactsList />
    </div>
  );
};

export const Sidebar = memo(_Sidebar);
