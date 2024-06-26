import { FC } from "react";
import { ISelectedTopic } from "@types";
import { useSelectTopic } from "@hooks";
import { SWIPE_DOWN, SWIPE_UP } from "@constants";
import SwipeComponent from "../../Swipe";
import Topics from "./topics";

const SwipeableTopicLists = SwipeComponent(Topics);

const TopicLists: FC<{
  selectedTopic: ISelectedTopic;
}> = ({ selectedTopic }) => {
  const { topicIndex } = selectedTopic;
  const { deselectTopic, selectTopic, openTopicLink } = useSelectTopic();

  const handleSwipeUp = () => {
    selectTopic(topicIndex, SWIPE_UP);
  };

  const handleSwipeDown = () => {
    selectTopic(topicIndex, SWIPE_DOWN);
  };

  return (
    <SwipeableTopicLists
      selectedTopic={selectedTopic}
      swipeRight={deselectTopic}
      swipeUp={handleSwipeUp}
      swipeDown={handleSwipeDown}
      swipeLeft={openTopicLink}
    />
  );
};
export default TopicLists;
