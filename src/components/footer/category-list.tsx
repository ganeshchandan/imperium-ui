import { FC } from "react";
import {
  CATEGOTY_FILTER_TYPE,
  EMPTY_STRING,
  RECENTLY_VIEWED,
} from "@constants";
import { useDispatch, useSelector } from "react-redux";
import { setRecentlyViewFilter, setSelectedRelevance } from "@reducers";
import { useFilterTopic } from "@hooks";
import { RootState } from "@store";
import { ICategoryList } from "@types";
import Footermenu from "./menu";

const CategoryList: FC<ICategoryList> = ({ categories, selectedRelevance }) => {
  const dispatch = useDispatch();
  const { filterTopics } = useFilterTopic();
  const { selectedCategory, filterType } = useSelector(
    (state: RootState) => state.filter
  );

  const handleSelectedTopicCategory = (event: any) => {
    event.stopPropagation();
    event.target.scrollIntoViewIfNeeded({ behavior: "smooth" });

    const { categoryname = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    const updateSelectedRelevance = selectedRelevance.includes(categoryname)
      ? []
      : [categoryname];

    const updatedFilterType =
      filterType === RECENTLY_VIEWED ? CATEGOTY_FILTER_TYPE : filterType;

    dispatch(
      setSelectedRelevance({
        selectedRelavance: updateSelectedRelevance,
        filterType: updatedFilterType,
      })
    );
    filterTopics(updatedFilterType, selectedCategory, updateSelectedRelevance);
  };

  const handleRecentlyViewed = (event: any) => {
    event.stopPropagation();
    event.target.scrollIntoViewIfNeeded({ behavior: "smooth" });
    dispatch(setRecentlyViewFilter());
    filterTopics(RECENTLY_VIEWED, [], []);
  };

  const handleAllCategory = (event: any) => {
    event.stopPropagation();
    event.target.scrollIntoViewIfNeeded({ behavior: "smooth" });
    const updatedFilterType =
      filterType === RECENTLY_VIEWED ? CATEGOTY_FILTER_TYPE : filterType;
    dispatch(
      setSelectedRelevance({
        selectedRelavance: [],
        filterType: updatedFilterType,
      })
    );
    filterTopics(updatedFilterType, selectedCategory, []);
  };

  return (
    <div className="categories-pill-list">
      <div className="categories-pill">
        <div
          className={`category-pill ${
            selectedRelevance.length === 0 && filterType !== RECENTLY_VIEWED
              ? "category-pill-selected"
              : ""
          }`}
          onClick={handleAllCategory}
        >
          All
        </div>
        <div
          className={`category-pill ${
            filterType === RECENTLY_VIEWED ? "category-pill-selected" : ""
          }`}
          onClick={handleRecentlyViewed}
        >
          Recently Viewed
        </div>
        {categories.map((topicCategory) => (
          <div
            key={topicCategory}
            className={`category-pill ${
              selectedRelevance.includes(topicCategory)
                ? "category-pill-selected"
                : EMPTY_STRING
            }`}
            onClick={handleSelectedTopicCategory}
            data-categoryname={topicCategory}
          >
            {topicCategory}
          </div>
        ))}
      </div>
      <Footermenu />
    </div>
  );
};

export default CategoryList;
