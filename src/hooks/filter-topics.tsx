import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import { setFilteredTopics, setSearchBox, setFilterType } from "@reducers";
import {
  getFilteredTopics,
  getSortedTopics,
  getTopicListForFilterType,
} from "../utils/app";
import { ISelectedTopic, TFilterType, TSearchByColumn } from "@types";
import { DETAILS_PAGE_SELECT, SEARCH_FILTER_TYPE } from "@constants";

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

    dispatch(
      setFilteredTopics({
        filteredTopics: getSortedTopics(filterType, filteredTopics),
      })
    );
  };

  const filterTopicsBySearch = (
    filterType: TFilterType,
    searchValue: string,
    searchBy: TSearchByColumn
  ) => {
    dispatch(setSearchBox(false));
    dispatch(setFilterType({ filterType: SEARCH_FILTER_TYPE }));
    const filteredTopics = getFilteredTopics(filterType, topics, {
      searchValue: searchValue.toLowerCase(),
      searchBy,
    });
    let selectedTopic: ISelectedTopic | null = null;
    if (searchBy !== "") {
      selectedTopic = {
        ...filteredTopics[0],
        topicIndex: 0,
        swipeType: "click",
        selectedPage: DETAILS_PAGE_SELECT,
      };
    }
    dispatch(
      setFilteredTopics({
        filteredTopics,
        selectedTopic,
      })
    );
  };

  return { filterTopics, filterTopicsBySearch };
};
