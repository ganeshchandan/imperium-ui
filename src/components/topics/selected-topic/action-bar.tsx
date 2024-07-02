import { BOOKMARK, PINNED, SHARE } from "@constants";
import { useBookmarkAction } from "@hooks";
import { IActionBar } from "@types";
import { BackArrow, ShareIcon, PinnedFooter, PinnedIconSaved } from "@assets";
import IconWithName from "../../common/icon-with-name";

const ActionBar = ({
  backToTopicList,
  handleShare,
  topic,
  bookmarkDetails,
  enableBookmarkAndShare,
}: IActionBar) => {
  const { topicBookmark } = useBookmarkAction();
  const { bookmark_id, isLoading } = bookmarkDetails || {};

  const handleBookmark = () => {
    if (enableBookmarkAndShare && topic) {
      topicBookmark(topic);
    }
  };

  return (
    <div className="selected-topic-actionbar">
      {/* <img
        src={BackArrow}
        alt="Back to topic List"
        onClick={backToTopicList}
        // onTouchEnd={backToTopicList}
        className="back-to-topic-list"
      /> */}
      <IconWithName
        imageUrl={BackArrow}
        imageAlt={"Back to topic List"}
        onClick={backToTopicList}
        className="back-to-topic-list"
      />
      {enableBookmarkAndShare && (
        <div className="share-bookmark-icons">
          <IconWithName
            name={SHARE}
            imageUrl={ShareIcon}
            imageAlt={SHARE}
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
              name={PINNED}
              imageUrl={bookmark_id ? PinnedFooter : PinnedIconSaved}
              imageAlt={BOOKMARK}
              onClick={handleBookmark}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ActionBar;
