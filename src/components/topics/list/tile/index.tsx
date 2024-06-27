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

  const { topic_title, topic_short_description, topic_image, topic_id } = topic;

  const handleTopicSelect = () => {
    if (!topicTileRef.current.isViewScrolling) {
      selectTopic(topicIndex, CLICK);
    }
    topicTileRef.current.isViewScrolling = false;
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
