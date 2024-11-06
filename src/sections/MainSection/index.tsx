import React, { FC, memo } from "react";

import { ChatSection } from "./components/ChatSection";
import { MessageCreationSection } from "./components/MessageCreationSection";
import "./styles.scss";

interface MainSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainSection: FC<MainSectionProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div className="main-section" {...restProps}>
      <div className="inner">
        <ChatSection />
        <MessageCreationSection />
      </div>
    </div>
  );
};

export const MainSection = memo(_MainSection);
