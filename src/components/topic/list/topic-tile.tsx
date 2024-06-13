import { TOPIC_IMAGES } from "../../../assets";
import FavoriteIcon from "../../../assets/favorite.svg";
import { TOPIC_IMAGE } from "../../../constants";
import { useSelectTopic } from "../../../hooks";
import { ITopic } from "../../../type";
import { formatDescription } from "../../../utils/app";
import { useRef } from "react";

const TopicTile = ({
  topic,
  topicIndex,
}: {
  topic: ITopic;
  topicIndex: number;
}) => {
  const topicTileRef = useRef({ isViewScrolling: false });
  const { selectTopic } = useSelectTopic();

  const {
    topic_title,
    topic_short_description,
    topic_saved_date,
    topic_image,
  } = topic;

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
        <div className="topic-image">
          <img
            src={topic_image || TOPIC_IMAGES[`${TOPIC_IMAGE}1`]}
            alt="Topic"
            className="topic-image-tag"
          />
        </div>
        <div className="topic-title-content">
          <div className="topic-title">{topic_title}</div>
          <div className="topic-content">
            {formatDescription(topic_short_description)}
          </div>
        </div>
      </div>
      <div className="topic-metadata">
        <div className="saved-date-read-time">{`${topic_saved_date}`}</div>
        <div className="favorite-icon">
          <img src={FavoriteIcon} alt="Favorite Icon" />
        </div>
      </div>
    </div>
  );
};

export default TopicTile;
