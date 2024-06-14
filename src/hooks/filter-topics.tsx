import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilteredTopics } from "../reducers/topic";
import { getFilteredTopics } from "../utils/app";
import { TFilterType } from "../type";

export const useFilterTopic = () => {
  const { topics } = useSelector((state: RootState) => state.topic);
  const dispatch = useDispatch();

  const filterTopics = (
    filterType: TFilterType,
    selectedCategory: string[],
    selectedRelavance: string[]
  ) => {
    dispatch(
      setFilteredTopics(
        getFilteredTopics(filterType, {
          topics,
          selectedCategory,
          selectedRelavance,
        })
      )
    );
  };
  return { filterTopics };
};
