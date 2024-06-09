import { useState } from "react";
import { CATEGORY_TAB } from "../../constants";
import FilterRelevanceTabs from "./tabs";
import FilterRelevanceContent from "./content";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Filter = () => {
  const [selectedTab, setSelectedTab] = useState(CATEGORY_TAB);
  const showFilter = useSelector((state: RootState) => state.filter.showFilter);

  return (
    <div
      className={`filter-relevance-category ${
        showFilter ? "show-filter-popup" : ""
      }`}
    >
      <FilterRelevanceTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <FilterRelevanceContent selectedTab={selectedTab} />
    </div>
  );
};

export default Filter;
