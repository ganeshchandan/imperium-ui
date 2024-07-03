import { useSelectTopic } from "@hooks";
import { ITopicList } from "@types";
import TopicImage from "./topic_image";
import TopicTileContent from "./content";
import TopicTileFooter from "./footer";
import { useRef } from "react";
import { CLICK } from "@constants";

const TopicList = ({
  topic,
  topicIndex,
  bookmarkDetails,
  viewType,
}: ITopicList) => {
  const topicTileRef = useRef({ isViewScrolling: false });
  const { selectTopic } = useSelectTopic();
  const topicListRef = useRef<HTMLDivElement>(null);
  const topicTimerRef = useRef<{
    clickTrigger?: NodeJS.Timeout;
    restoreAnimation?: NodeJS.Timeout;
  }>({});

  const { topic_title, topic_short_description, topic_image, topic_id } = topic;

  const handleTopicSelect = () => {
    if (topicListRef.current) {
      topicListRef.current.classList.add("list-seleceted");
      topicTimerRef.current.clickTrigger = setTimeout(() => {
        clearTimeout(topicTimerRef.current.clickTrigger);
        if (!topicTileRef.current.isViewScrolling) {
          selectTopic(topicIndex, CLICK);
        }
        topicTileRef.current.isViewScrolling = false;
        restoreAnimation();
      }, 200);
    }
  };

  const restoreAnimation = () => {
    topicTimerRef.current.restoreAnimation = setTimeout(() => {
      topicListRef.current?.classList.remove("list-seleceted");
      clearTimeout(topicTimerRef.current.restoreAnimation);
    }, 300);
  };

  const handleTouchMove = () => {
    topicTileRef.current.isViewScrolling = true;
  };

  return (
    <div
      className={viewType}
      onClick={handleTopicSelect}
      onTouchEnd={handleTopicSelect}
      onTouchMove={handleTouchMove}
      key={topic_id}
      ref={topicListRef}
    >
      <div className="topic-details">
        <TopicImage topic_image={topic_image} />
        <TopicTileContent
          topic_title={topic_title}
          topic_short_description={topic_short_description}
        />
      </div>
      <TopicTileFooter topic={topic} bookmarkDetails={bookmarkDetails} />
    </div>
  );
};

export default TopicList;
