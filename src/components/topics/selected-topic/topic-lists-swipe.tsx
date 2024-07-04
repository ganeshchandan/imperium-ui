import { FC, useRef } from "react";
import { ISelectedTopic } from "@types";
import { useSelectTopic } from "@hooks";
import { SWIPE_DOWN, SWIPE_UP } from "@constants";
import SwipeComponent from "../../Swipe";
import Topics from "./topics";
import { ITopicSelectionType, selectedTopicHandler } from "@utils";
import { useSelector } from "react-redux";
import { RootState } from "@store";

const SwipeableTopicLists = SwipeComponent(Topics);

const SwipeTopicLists: FC<{
  selectedTopic: ISelectedTopic;
}> = ({ selectedTopic }) => {
  const swipeTopicListRef = useRef<{ clearTimer?: NodeJS.Timeout }>({});
  const topics = useSelector((state: RootState) => state.topic.filteredTopics);
  const { topicIndex } = selectedTopic;
  const { deselectTopic, selectTopic, openTopicLink } = useSelectTopic();
  const topicListRef = useRef<HTMLDivElement>(null);

  const handleSwipeUp = () => {
    handleSwipeEvents(SWIPE_UP);
  };

  const handleSwipeDown = () => {
    handleSwipeEvents(SWIPE_DOWN);
  };

  const handleSwipeEvents = (swipeType: ITopicSelectionType) => {
    const topicListRefElement: HTMLElement | null = topicListRef.current;
    if (topicListRefElement && topics.length > 1) {
      selectedTopicHandler(
        topicListRefElement,
        topicIndex,
        swipeType,
        selectTopic,
        swipeTopicListRef.current.clearTimer
      );
    }
  };

  return (
    <div className="next-prev-topics" ref={topicListRef}>
      <SwipeableTopicLists
        selectedTopic={selectedTopic}
        topicListRef={topicListRef}
        swipeRight={deselectTopic}
        swipeUp={handleSwipeUp}
        swipeDown={handleSwipeDown}
        swipeLeft={openTopicLink}
      />
    </div>
  );
};
export default SwipeTopicLists;
