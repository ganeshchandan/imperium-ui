import { FC, useCallback } from "react";
import { FILTER_POPUP_TABS } from "../../constants";
import Tabs from "../common/tab";

interface IFilterRelevanceTabs {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const FilterRelevanceTabs: FC<IFilterRelevanceTabs> = ({
  selectedTab,
  setSelectedTab,
}) => {
  const handleTabSelected = useCallback((selectedTab: string) => {
    setSelectedTab(selectedTab);
  }, []);

  return (
    <div className="filter-relevance-tabs">
      <Tabs
        tabs={FILTER_POPUP_TABS}
        selectedTab={selectedTab}
        onSelect={handleTabSelected}
      />
    </div>
  );
};

export default FilterRelevanceTabs;
