import { useDispatch, useSelector } from "react-redux";
import { setSelectedTopic } from "../../reducers/topic";
import { RootState } from "../../store";

const useSelectTopic = () => {
  const dispatch = useDispatch();
  const filteredTopics = useSelector(
    (state: RootState) => state.topic.filteredTopics
  );
  const topicsCount = filteredTopics.length;
  const selectedTopicIndex = useSelector(
    (state: RootState) => state.topic.selectedTopic.topicIndex
  );

  const selectTopic = (topicIndex: number) => {
    dispatch(
      setSelectedTopic({
        isSelected: true,
        topicIndex,
        ...filteredTopics[topicIndex],
      })
    );
  };

  const selectPreviousTopic = () => {
    let previousTopicIndex = selectedTopicIndex - 1;
    previousTopicIndex = (previousTopicIndex + topicsCount) % topicsCount;
    dispatch(
      setSelectedTopic({
        isSelected: true,
        topicIndex: previousTopicIndex,
        ...filteredTopics[previousTopicIndex],
      })
    );
  };

  const selectNextTopic = () => {
    let nextTopicIndex = selectedTopicIndex + 1;
    nextTopicIndex = nextTopicIndex % topicsCount;

    dispatch(
      setSelectedTopic({
        isSelected: true,
        topicIndex: nextTopicIndex,
        ...filteredTopics[nextTopicIndex],
      })
    );
  };

  return { selectTopic, selectPreviousTopic, selectNextTopic };
};

export default useSelectTopic;
