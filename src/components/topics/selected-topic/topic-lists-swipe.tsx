import { FC, useRef } from "react";
import { ISelectedTopic } from "@types";
import { useSelectTopic } from "@hooks";
import { SWIPE_DOWN, SWIPE_UP } from "@constants";
import SwipeComponent from "../../Swipe";
import Topics from "./topics";
import { selectedTopicHandler } from "../../../utils/app";

const SwipeableTopicLists = SwipeComponent(Topics);

const SwipeTopicLists: FC<{
  selectedTopic: ISelectedTopic;
}> = ({ selectedTopic }) => {
  const { topicIndex } = selectedTopic;
  const { deselectTopic, selectTopic, openTopicLink } = useSelectTopic();
  const topicListRef = useRef<HTMLDivElement>(null);

  const handleSwipeUp = () => {
    const topicListRefElement: HTMLElement | null = topicListRef.current;
    if (topicListRefElement) {
      selectedTopicHandler(
        topicListRefElement,
        topicIndex,
        SWIPE_UP,
        selectTopic
      );
    }
  };

  const handleSwipeDown = () => {
    const topicListRefElement: HTMLElement | null = topicListRef.current;
    if (topicListRefElement) {
      selectedTopicHandler(
        topicListRefElement,
        topicIndex,
        SWIPE_DOWN,
        selectTopic
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
