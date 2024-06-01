import BackArrow from "../../../assets/arrow-right.svg";
import IconWithName from "../../common/icon-with-name";
import ShareIcon from "../../../assets/share.svg";
import BookmarkIcon from "../../../assets/bookmark.svg";

import { BOOKMARK, SHARE } from "../../../constants";

const ActionBar = ({ backToTopicList }: { backToTopicList: () => void }) => {
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
          imageUrl={BookmarkIcon}
          imageAlt={BOOKMARK}
          className="icon-with-name"
        />
      </div>
    </div>
  );
};

export default ActionBar;
