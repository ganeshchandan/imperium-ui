import { FC, SyntheticEvent } from "react";
import { useBookmarkAction } from "@hooks";
import { ITopicTileFooter } from "@types";
import { PinnedIconSaved, PinnedIcon } from "@assets";

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
    event.preventDefault();
  };

  return (
    <div className="topic-metadata">
      <div className="saved-date-read-time">{`${topic_saved_date}`}</div>
      {isLoading ? (
        <div
          onClick={onTouchStart}
          onTouchStart={onTouchStart.bind({ passive: false })}
        >
          <div className="dot-loader">
            <div className="dot dot-1" />
            <div className="dot dot-2" />
            <div className="dot dot-3" />
          </div>
        </div>
      ) : (
        <div
          className="favorite-icon"
          onClick={onTouchStart.bind({ passive: false })}
          onTouchEnd={handleBookmark.bind({ passive: false })}
          onTouchStart={onTouchStart.bind({ passive: false })}
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
