import { FC, SyntheticEvent } from "react";
import FavoriteIconSaved from "../../../../assets/favorite-filled.svg";
import FavoriteIcon from "../../../../assets/favorite.svg";
import { useBookmarkAction } from "../../../../hooks";
import { IBookmarkedTopic, ITopic } from "../../../../type";

interface ITopicTileFooter {
  topic: ITopic;
  bookmarkDetails: IBookmarkedTopic;
}

const TopicTileFooter: FC<ITopicTileFooter> = ({ topic, bookmarkDetails }) => {
  const { topic_saved_date } = topic;
  const { topicBookmark } = useBookmarkAction();
  const { bookmark_id, isLoading } = bookmarkDetails;

  const handleBookmark = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    topicBookmark(topic);
  };

  const onTouchStart = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="topic-metadata">
      <div className="saved-date-read-time">{`${topic_saved_date}`}</div>
      {isLoading ? (
        <div onClick={onTouchStart} onTouchStart={onTouchStart}>
          <div className="dot-loader">
            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default TopicTileFooter;
