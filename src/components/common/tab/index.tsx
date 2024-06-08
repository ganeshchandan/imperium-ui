import { FC, useEffect, useMemo, useState } from "react";
import { EMPTY_STRING } from "../../../constants";
import "./tab.scss";

interface ITabs {
  className?: string;
  tabs: { name: string; value: string }[];
  selectedTab: string;
  onSelect: (selectedTab: string) => void;
}

const Tabs: FC<ITabs> = ({ className, tabs, selectedTab, onSelect }) => {
  const [selectedBarStyle, setSelectedBarStyle] = useState({});

  useEffect(() => {
    setSelectedBarStyle({
      "--selected-bar-left": `${getSeletedTabPostition}%`,
      gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
    });
  }, [selectedTab, tabs]);

  const getSeletedTabPostition = useMemo(() => {
    const tabsCount = tabs.length;
    const selectedIndex = tabs.findIndex(({ value }) => selectedTab === value);
    return (100 / tabsCount) * selectedIndex;
  }, [selectedTab, tabs]);

  const handleTabSelected = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const { tabvalue = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    onSelect(tabvalue);
  };

  return (
    <div className={`tabs ${className}`} style={selectedBarStyle}>
      {tabs.map(({ name, value }) => (
        <div
          className={`tab ${value === selectedTab ? "selected" : ""}`}
          data-tabvalue={value}
          onClick={handleTabSelected}
          key={value}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
