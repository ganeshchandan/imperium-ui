import { useCallback, useState } from "react";
import {
  CATEGORY_TAB,
  FILTERBY_TAB,
  FILTER_POPUP_TABS,
  RELEVANCE_TAB,
} from "../../constants";
import Tabs from "../common/tab";
import CategoryFilterBy from "./category-filter-by";

const FilterRelevanceCategory = () => {
  const [selectedTab, setSelectedTab] = useState(CATEGORY_TAB);

  const handleTabSelected = useCallback((selectedTab: string) => {
    setSelectedTab(selectedTab);
  }, []);

  const renderTabContent = () => {
    switch (selectedTab) {
      case CATEGORY_TAB:
        return <CategoryFilterBy selectedTab={selectedTab} />;
      case FILTERBY_TAB:
        return <CategoryFilterBy selectedTab={selectedTab} />;
      case RELEVANCE_TAB:
        return <div>RELEVANCE_TAB</div>;
      default:
        return <></>;
    }
  };

  return (
    <div className="filter-relevance-category">
      <div className="filter-relevance-tabs">
        <Tabs
          tabs={FILTER_POPUP_TABS}
          selectedTab={selectedTab}
          onSelect={handleTabSelected}
        />
      </div>
      {renderTabContent()}
    </div>
  );
};

export default FilterRelevanceCategory;
