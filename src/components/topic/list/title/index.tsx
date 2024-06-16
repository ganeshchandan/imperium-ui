import { useSelectTopic } from "../../../../hooks";
import { IBookmarkedTopic, ITopic } from "../../../../type";
import TopicImage from "./topic_image";
import TopicTileContent from "./content";
import TopicTileFooter from "./footer";
import { useRef } from "react";

const TopicTile = ({
  topic,
  topicIndex,
  bookmarkDetails,
}: {
  topic: ITopic;
  topicIndex: number;
  bookmarkDetails: IBookmarkedTopic;
}) => {
  const topicTileRef = useRef({ isViewScrolling: false });
  const { selectTopic } = useSelectTopic();

  const { topic_title, topic_short_description, topic_image } = topic;

  const handleTopicSelect = () => {
    if (!topicTileRef.current.isViewScrolling) {
      selectTopic(topicIndex);
    }
    topicTileRef.current.isViewScrolling = false;
  };

  const handleTouchMove = () => {
    topicTileRef.current.isViewScrolling = true;
  };

  return (
    <div
      className="topic-tile"
      onClick={handleTopicSelect}
      onTouchEnd={handleTopicSelect}
      onTouchMove={handleTouchMove}
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

export default TopicTile;
