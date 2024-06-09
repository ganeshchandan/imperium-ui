import { useState } from "react";
import { RELEVANCE_TAB } from "../../constants";
import FilterRelevanceTabs from "./tabs";
import FilterRelevanceContent from "./content";

const Filter = () => {
  const [selectedTab, setSelectedTab] = useState(RELEVANCE_TAB);

  return (
    <div className="filter-relevance-category">
      <FilterRelevanceTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <FilterRelevanceContent selectedTab={selectedTab} />
    </div>
  );
};

export default Filter;
