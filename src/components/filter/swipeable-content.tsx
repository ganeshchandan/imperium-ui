import { CATEGORY_TAB } from "@constants";
import { RootState } from "@store";
import { SyntheticEvent, useState } from "react";
import FilterRelevanceContent from "./content";
import FilterRelevanceTabs from "./tabs";
import { useDispatch, useSelector } from "react-redux";
import { setShowFilter } from "../../reducers/filter";

const SwipeableContent = () => {
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

export default SwipeableContent;
