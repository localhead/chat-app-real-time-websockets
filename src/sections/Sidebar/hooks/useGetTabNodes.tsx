import { useState } from "react";
import { TabItem } from "../TabItem";

export const useGetTabNodes = (tabs: { value: number; label: string }[]) => {
  const [active, setActiveTab] = useState<number | null>(0);

  return tabs.map((item) => {
    const clickHandler = () => {
      setActiveTab(item.value);
    };

    const isActive = active === item.value;

    return (
      <TabItem
        key={item.value}
        label={item.label}
        onClick={clickHandler}
        isActive={isActive}
      />
    );
  });
};
