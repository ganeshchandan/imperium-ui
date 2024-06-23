import { FC, SyntheticEvent } from "react";
import PinnedIconSaved from "../../../../assets/pinned_saved.svg";
import PinnedIcon from "../../../../assets/pinned.svg";
import { useBookmarkAction } from "../../../../hooks";
import { ITopicTileFooter } from "../../../../type";

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
            src={bookmark_id ? PinnedIconSaved : PinnedIcon}
            alt="Favorite Icon"
          />
        </div>
      )}
    </div>
  );
};

export default TopicTileFooter;
