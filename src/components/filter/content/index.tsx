import { useDispatch, useSelector } from "react-redux";
import { CATEGORY_TAB, FILTERBY_TAB, RELEVANCE_TAB } from "../../../constants";
import {
  setSelectedCategory,
  setFilterBy,
  setRelevanceList,
} from "../../../reducers/filter";
import { RootState } from "../../../store";
import { FC } from "react";
import Relevance from "../relevance";
import FilterByCategory from "../filter-category";
import ContentContainer from "./container";
import { useFilterTopic } from "../../../hooks";

const CategoryAndFilter = ContentContainer(FilterByCategory);
const RelevanceHoc = ContentContainer(Relevance);

interface IFilterRelevanceContent {
  selectedTab: string;
}

const FilterRelevanceContent: FC<IFilterRelevanceContent> = ({
  selectedTab,
}) => {
  const dispatch = useDispatch();
  const { filterTopics } = useFilterTopic();

  const { filterByList, categories } = useSelector(
    (state: RootState) => state.topic
  );

  const { selectedFilterBy, selectedCategory, relevanceList } = useSelector(
    (state: RootState) => state.filter
  );

  const handleFilterBySelected = (selectedItem: string[]) =>
    dispatch(setFilterBy(selectedItem));

  const handleCategorySelection = (selectedItem: string[]) => {
    dispatch(setSelectedCategory(selectedItem));
    filterTopics(selectedItem, []);
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
      case FILTERBY_TAB:
        return (
          <CategoryAndFilter
            isMultipleSelection={false}
            listItems={filterByList}
            selectedItems={selectedFilterBy}
            handleSelected={handleFilterBySelected}
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
