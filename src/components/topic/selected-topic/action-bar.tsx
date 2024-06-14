import BackArrow from "../../../assets/arrow-right.svg";
import IconWithName from "../../common/icon-with-name";
import ShareIcon from "../../../assets/share.svg";
import BookmarkIcon from "../../../assets/bookmark.svg";
import BookmarkIconFilled from "../../../assets/favorite-filled.svg";

import { BOOKMARK, SHARE } from "../../../constants";
import { useBookmarkAction } from "../../../hooks";
import { ITopic } from "../../../type";

const ActionBar = ({
  backToTopicList,
  topic,
}: {
  backToTopicList: () => void;
  topic: ITopic;
}) => {
  const { bookmark_id } = topic;
  const { topicBookmark } = useBookmarkAction();

  const handleBookmark = () => {
    topicBookmark(topic, true);
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
        />
        <IconWithName
          name={BOOKMARK}
          imageUrl={bookmark_id ? BookmarkIconFilled : BookmarkIcon}
          imageAlt={BOOKMARK}
          className="icon-with-name"
          onClick={handleBookmark}
        />
      </div>
    </div>
  );
};

export default ActionBar;
