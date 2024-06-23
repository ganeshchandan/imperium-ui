import { SyntheticEvent, useState } from "react";
import { CATEGORY_TAB } from "@constants";
import FilterRelevanceTabs from "./tabs";
import FilterRelevanceContent from "./content";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setShowFilter } from "../../reducers/filter";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(CATEGORY_TAB);
  const showFilter = useSelector((state: RootState) => state.filter.showFilter);

  const handleOutsideClick = () => {
    dispatch(setShowFilter(false));
  };

  const handlePopupClick = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={`filter-popup-container ${
          showFilter ? "show-filter-popup" : ""
        }`}
        onClick={handleOutsideClick}
      ></div>
      <div
        className={`filter-relevance-category ${
          showFilter ? "show-filter-popup" : ""
        }`}
        onClick={handlePopupClick}
      >
        <div className="filter-popup-drawer"></div>
        <FilterRelevanceTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <FilterRelevanceContent selectedTab={selectedTab} />
      </div>
    </>
  );
};

export default Filter;
