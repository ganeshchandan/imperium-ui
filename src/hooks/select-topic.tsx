import { useDispatch, useSelector } from "react-redux";
import { setSelectedTopic } from "../reducers/topic";
import { RootState } from "../store";
import { getTopicIndex, ITopicSelectionType } from "../utils/swipe";

export const useSelectTopic = () => {
  const dispatch = useDispatch();
  const filteredTopics = useSelector(
    (state: RootState) => state.topic.filteredTopics
  );
  const topicsCount = filteredTopics.length;
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const deselectTopic = () => {
    dispatch(
      setSelectedTopic({
        selectedTopic: { ...selectedTopic, isSelected: false },
      })
    );
  };

  const selectTopic = (
    selectedTopicIndex: number,
    selectionType: ITopicSelectionType
  ) => {
    const topicIndex = getTopicIndex(
      selectedTopicIndex,
      selectionType,
      topicsCount
    );
    dispatch(
      setSelectedTopic({
        selectedTopic: {
          isSelected: true,
          topicIndex,
          swipeType: selectionType,
          ...filteredTopics[topicIndex],
        },
      })
    );
  };

  return { selectTopic, deselectTopic };
};
