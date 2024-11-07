import React, { FC } from "react";

import { ChatSection } from "./components/ChatSection";
import { Header } from "./components/Header";
import { MessageCreationSection } from "./components/MessageCreationSection";
import "./styles.scss";

interface MainSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MainSection: FC<MainSectionProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div className="main-section" {...restProps}>
      <Header />
      <div className="inner">
        <div style={{ height: "50px" }} />
        <ChatSection />
        <MessageCreationSection />
      </div>
    </div>
  );
};
