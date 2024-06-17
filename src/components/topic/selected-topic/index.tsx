import { FC } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import SwipeComponent from "../../Swipe";
import SelectedTopicContent from "./content";
import { useCloseDetailsPage, useSelectTopic } from "../../../hooks";
import { getBookmarkTopicId } from "../../../utils/app";

const SwipeableSelectedTopic = SwipeComponent(SelectedTopicContent);

const SelectedTopic: FC = () => {
  const { bookmarkedTopics, selectedTopic } = useSelector(
    (state: RootState) => state.topic
  );
  const { topic_title } = selectedTopic;
  const bookmarkId = getBookmarkTopicId(bookmarkedTopics, topic_title);
  // const { topicIndex, swipeType } = selectedTopic;
  const { backToTopicList } = useCloseDetailsPage();
  const { selectPreviousTopic, selectNextTopic } = useSelectTopic();

  return (
    <div className="selected-topic-list">
      <SwipeableSelectedTopic
        selectedTopic={selectedTopic}
        isBookmarked={!!bookmarkId}
        swipeRight={backToTopicList}
        swipeUp={selectPreviousTopic}
        swipeDown={selectNextTopic}
      />
    </div>
  );
};

export default SelectedTopic;
