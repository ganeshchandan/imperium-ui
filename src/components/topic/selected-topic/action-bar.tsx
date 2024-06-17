import BackArrow from "../../../assets/arrow-right.svg";
import IconWithName from "../../common/icon-with-name";
import ShareIcon from "../../../assets/share.svg";
import BookmarkIcon from "../../../assets/bookmark.svg";
import BookmarkIconFilled from "../../../assets/favorite-filled.svg";

import { BOOKMARK, SHARE } from "../../../constants";
import { useBookmarkAction } from "../../../hooks";
import { IBookmarkedTopic, ITopic } from "../../../type";

const ActionBar = ({
  backToTopicList,
  handleShare,
  topic,
  bookmarkDetails,
}: {
  backToTopicList: () => void;
  handleShare: () => void;
  topic: ITopic;
  bookmarkDetails: IBookmarkedTopic;
}) => {
  const { topicBookmark } = useBookmarkAction();
  const { bookmark_id, isLoading } = bookmarkDetails;

  const handleBookmark = () => {
    topicBookmark(topic);
  };

  return (
    <div className="selected-topic-actionbar">
      <img
        src={BackArrow}
        alt="Back to topic List"
        onClick={backToTopicList}
        onTouchEnd={backToTopicList}
        className="back-to-topic-list"
      />
      <div className="share-bookmark-icons">
        <IconWithName
          name={SHARE}
          imageUrl={ShareIcon}
          imageAlt={SHARE}
          className="icon-with-name"
          onClick={handleShare}
        />
        {isLoading ? (
          <div className="icon-with-name" style={{ width: "3.438rem" }}>
            <div className="dot-loader">
              <div className="dot dot-1" />
              <div className="dot dot-2" />
              <div className="dot dot-3" />
            </div>
          </div>
        ) : (
          <IconWithName
            name={BOOKMARK}
            imageUrl={bookmark_id ? BookmarkIconFilled : BookmarkIcon}
            imageAlt={BOOKMARK}
            className="icon-with-name"
            onClick={handleBookmark}
          />
        )}
      </div>
    </div>
  );
};

export default ActionBar;
