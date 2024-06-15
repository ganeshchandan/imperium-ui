import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilteredTopics, setSearchBox } from "../reducers/topic";
import { getFilteredTopics, getSortedTopics } from "../utils/app";
import { TFilterType } from "../type";

export const useFilterTopic = () => {
  const { topics } = useSelector((state: RootState) => state.topic);
  const dispatch = useDispatch();

  const filterTopics = (
    filterType: TFilterType,
    selectedCategory: string[],
    selectedRelavance: string[]
  ) => {
    const filteredTopics = getFilteredTopics(filterType, topics, {
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
