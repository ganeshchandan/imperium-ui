import { TOPIC_IMAGES } from "../../assets";
import FavoriteIcon from "../../assets/favorite.svg";
import { TOPIC_IMAGE } from "../../constants";
import { ITopic } from "../../type";

const TopicTile = ({ topic }: { topic: ITopic }) => {
  const {
    topic_id,
    topic_title,
    topic_short_description,
    topic_saved_date,
    topic_read_time,
  } = topic;
  return (
    <div className="topic-tile">
      <div className="topic-details">
        <div className="topic-image">
          <img src={TOPIC_IMAGES[`${TOPIC_IMAGE}${topic_id}`]} alt="Topic" />
        </div>
        <div className="topic-title-content">
          <div className="topic-title">{topic_title}</div>
          <div className="topic-content">{topic_short_description}</div>
        </div>
      </div>
      <div className="topic-metadata">
        <div className="saved-date-read-time">{`${topic_saved_date} • ${topic_read_time} read`}</div>
        <div className="favorite-icon">
          <img src={FavoriteIcon} alt="Favorite Icon" />
        </div>
      </div>
    </div>
  );
};

export default TopicTile;
