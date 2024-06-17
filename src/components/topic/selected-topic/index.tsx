import { FC } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import SwipeComponent from "../../Swipe";
import SelectedTopicContent from "./content";
import { useSelectTopic } from "../../../hooks";
import { getBookmarkTopicId } from "../../../utils/app";
import { SWIPE_DOWN, SWIPE_UP } from "../../../constants";

const SwipeableSelectedTopic = SwipeComponent(SelectedTopicContent);

const SelectedTopic: FC = () => {
  const { bookmarkedTopics, selectedTopic } = useSelector(
    (state: RootState) => state.topic
  );
  const { topic_title, topicIndex } = selectedTopic;
  const bookmarkDetails = getBookmarkTopicId(bookmarkedTopics, topic_title);
  const { deselectTopic } = useSelectTopic();
  const { selectTopic } = useSelectTopic();

  const handleSwipeUp = () => {
    selectTopic(topicIndex, SWIPE_UP);
  };

  const handleSwipeDown = () => {
    selectTopic(topicIndex, SWIPE_DOWN);
  };

  return (
    <div className="selected-topic-list">
      <SwipeableSelectedTopic
        selectedTopic={selectedTopic}
        bookmarkDetails={bookmarkDetails}
        swipeRight={deselectTopic}
        swipeUp={handleSwipeUp}
        swipeDown={handleSwipeDown}
      />
    </div>
  );
};

export default SelectedTopic;
