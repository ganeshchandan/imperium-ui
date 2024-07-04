import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import {
  setFilteredTopics,
  setSearchBox,
  setSearchFilterType,
} from "@reducers";
import {
  getFilteredTopics,
  getSortedTopics,
  getTopicListForFilterType,
} from "../utils/app";
import { TFilterType, TSearchByColumn } from "@types";

export const useFilterTopic = () => {
  const { topics, bookmarkedTopics, recentlyViewedTopics } = useSelector(
    (state: RootState) => state.topic
  );
  const dispatch = useDispatch();

  const filterTopics = (
    filterType: TFilterType,
    selectedCategory: string[],
    selectedRelavance: string[]
  ) => {
    const topicList = getTopicListForFilterType(
      filterType,
      topics,
      bookmarkedTopics,
      recentlyViewedTopics
    );
    const filteredTopics = getFilteredTopics(filterType, topicList, {
      selectedCategory,
      selectedRelavance,
      recentlyViewedTopics,
    });

    dispatch(setFilteredTopics(getSortedTopics(filterType, filteredTopics)));
  };

  const filterTopicsBySearch = (
    filterType: TFilterType,
    searchValue: string,
    searchBy: TSearchByColumn
  ) => {
    dispatch(setSearchBox(false));
    dispatch(setSearchFilterType());
    dispatch(
      setFilteredTopics(
        getFilteredTopics(filterType, topics, {
          searchValue: searchValue.toLowerCase(),
          searchBy,
        })
      )
    );
  };

  return { filterTopics, filterTopicsBySearch };
};
