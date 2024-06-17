import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilteredTopics, setSearchBox } from "../reducers/topic";
import {
  getFilteredTopics,
  getSortedTopics,
  getTopicListForFilterType,
} from "../utils/app";
import { TFilterType } from "../type";

export const useFilterTopic = () => {
  const { topics, bookmarkedTopics } = useSelector(
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
      bookmarkedTopics
    );
    const filteredTopics = getFilteredTopics(filterType, topicList, {
      selectedCategory,
      selectedRelavance,
    });

    dispatch(setFilteredTopics(getSortedTopics(filterType, filteredTopics)));
  };

  const filterTopicsBySearch = (
    filterType: TFilterType,
    searchValue: string
  ) => {
    dispatch(setSearchBox(false));
    dispatch(
      setFilteredTopics(
        getFilteredTopics(filterType, topics, {
          searchValue: searchValue.toLowerCase(),
        })
      )
    );
  };

  return { filterTopics, filterTopicsBySearch };
};
