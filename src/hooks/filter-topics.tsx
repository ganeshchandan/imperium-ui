import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilteredTopics } from "../reducers/topic";
import { getFilteredTopics } from "../utils/app";

export const useFilterTopic = () => {
  const { topics } = useSelector((state: RootState) => state.topic);
  const dispatch = useDispatch();

  const filterTopics = (
    selectedCategory: string[],
    selectedRelavance: string[]
  ) => {
    dispatch(
      setFilteredTopics(
        getFilteredTopics(topics, selectedCategory, selectedRelavance)
      )
    );
  };
  return { filterTopics };
};
