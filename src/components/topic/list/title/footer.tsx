import { FC, SyntheticEvent } from "react";
import FavoriteIconSaved from "../../../../assets/favorite-filled.svg";
import FavoriteIcon from "../../../../assets/favorite.svg";
import { useBookmarkAction } from "../../../../hooks";
import { ITopic } from "../../../../type";

interface ITopicTileFooter {
  topic: ITopic;
}

const TopicTileFooter: FC<ITopicTileFooter> = ({ topic }) => {
  const { topic_saved_date, bookmark_id } = topic;
  const { topicBookmark } = useBookmarkAction();

  const handleBookmark = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    topicBookmark(topic, false);
  };

  const onTouchStart = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="topic-metadata">
      <div className="saved-date-read-time">{`${topic_saved_date}`}</div>
      <div
        className="favorite-icon"
        onClick={onTouchStart}
        onTouchEnd={handleBookmark}
        onTouchStart={onTouchStart}
      >
        <img
          src={bookmark_id ? FavoriteIconSaved : FavoriteIcon}
          alt="Favorite Icon"
        />
      </div>
    </div>
  );
};

export default TopicTileFooter;
