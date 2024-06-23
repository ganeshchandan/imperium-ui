import { useDispatch, useSelector } from "react-redux";
import {
  CATEGORY_TAB,
  CATEGOTY_FILTER_TYPE,
  RECENTLY_VIEWED,
  RELEVANCE_TAB,
} from "@constants";
import {
  setSelectedCategory,
  setRelevanceList,
  setRecentlyViewFilter,
} from "@reducers";
import { RootState } from "@store";
import { FC } from "react";
import Relevance from "../relevance";
import FilterByCategory from "../filter-category";
import ContentContainer from "./container";
import { useFilterTopic } from "@hooks";
import { IFilterRelevanceContent } from "@types";

const CategoryAndFilter = ContentContainer(FilterByCategory);
const RelevanceHoc = ContentContainer(Relevance);

const FilterRelevanceContent: FC<IFilterRelevanceContent> = ({
  selectedTab,
}) => {
  const dispatch = useDispatch();
  const { filterTopics } = useFilterTopic();

  const { categories } = useSelector((state: RootState) => state.topic);

  const { selectedCategory, relevanceList } = useSelector(
    (state: RootState) => state.filter
  );

  const handleCategorySelection = (
    selectedItem: string[],
    isRecentlyViewed: boolean
  ) => {
    if (isRecentlyViewed) {
      dispatch(setRecentlyViewFilter());
      filterTopics(RECENTLY_VIEWED, selectedItem, []);
    } else {
      dispatch(setSelectedCategory(selectedItem));
      filterTopics(CATEGOTY_FILTER_TYPE, selectedItem, []);
    }
  };

  const handleSelectedRelevance = (selectedItem: string[]) =>
    dispatch(setRelevanceList(selectedItem));

  const renderTabContent = () => {
    switch (selectedTab) {
      case CATEGORY_TAB:
        return (
          <CategoryAndFilter
            listItems={categories}
            selectedItems={selectedCategory}
            handleSelected={handleCategorySelection}
            isMultipleSelection={true}
          />
        );
      case RELEVANCE_TAB:
        return (
          <RelevanceHoc
            isMultipleSelection={false}
            listItems={categories}
            selectedItems={relevanceList}
            handleSelected={handleSelectedRelevance}
          />
        );
      default:
        return <></>;
    }
  };

  return renderTabContent();
};

export default FilterRelevanceContent;
