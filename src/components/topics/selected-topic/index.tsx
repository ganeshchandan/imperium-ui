import { FC } from "react";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import { useSelectTopic } from "@hooks";
import { getBookmarkTopicId } from "../../../utils/app";
import ActionBar from "./action-bar";
import SwipeActions from "./swipe-actions";
import SwipeTopicLists from "./topic-lists-swipe";

const SelectedTopic: FC = () => {
  const { bookmarkedTopics, selectedTopic } = useSelector(
    (state: RootState) => state.topic
  );
  const { topic_title } = selectedTopic;
  const bookmarkDetails = getBookmarkTopicId(bookmarkedTopics, topic_title);
  const { deselectTopic } = useSelectTopic();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check this out!",
          // need to add url here once you have exposed
        });

        console.log("Content shared successfully");
      } catch (err) {
        console.error("Error sharing content:", err);
      }
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  return (
    <div className="selected-topic-list">
      <div className="selected-topics">
        <SwipeTopicLists selectedTopic={selectedTopic} />
        <ActionBar
          backToTopicList={deselectTopic}
          handleShare={handleShare}
          topic={selectedTopic}
          bookmarkDetails={bookmarkDetails}
          enableBookmarkAndShare={true}
        />
        <SwipeActions />
      </div>
    </div>
  );
};

export default SelectedTopic;
