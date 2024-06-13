import { useDispatch, useSelector } from "react-redux";
import { setSelectedTopic } from "../../reducers/topic";
import { RootState } from "../../store";
import { SWIPE_DOWN, SWIPE_NONE, SWIPE_UP } from "../../constants";
import { swipeDownTopicId, swipeUpTopicId } from "../../utils/app";

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
        swipeType: SWIPE_NONE,
        ...filteredTopics[topicIndex],
      })
    );
  };

  const selectPreviousTopic = () => {
    const previousTopicIndex = swipeUpTopicId(selectedTopicIndex, topicsCount);
    dispatch(
      setSelectedTopic({
        isSelected: true,
        topicIndex: previousTopicIndex,
        swipeType: SWIPE_UP,
        ...filteredTopics[previousTopicIndex],
      })
    );
  };

  const selectNextTopic = () => {
    const nextTopicIndex = swipeDownTopicId(selectedTopicIndex, topicsCount);
    dispatch(
      setSelectedTopic({
        isSelected: true,
        topicIndex: nextTopicIndex,
        swipeType: SWIPE_DOWN,
        ...filteredTopics[nextTopicIndex],
      })
    );
  };

  return { selectTopic, selectPreviousTopic, selectNextTopic };
};

export default useSelectTopic;
