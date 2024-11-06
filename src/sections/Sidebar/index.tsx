import React, { FC, memo } from "react";
import { ListCatalogIcon } from "../../packages/icons";
import { SearchBar } from "./SearchBar";
import "./styles.scss";

interface SidebarProps {
  className?: string;
  style?: React.CSSProperties;
}

const _Sidebar: FC<SidebarProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div className="sidebar" {...restProps}>
      <div className="top-container">
        <div className="list-icon-container">
          <ListCatalogIcon size={50} />
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export const Sidebar = memo(_Sidebar);
