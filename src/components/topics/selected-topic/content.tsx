import { FC } from "react";
import { IBookmarkedTopic, ISelectedTopic } from "@types";
import { formatDescription } from "../../../utils/app";
import ActionBar from "./action-bar";
import { useSelectTopic } from "@hooks";

const SelectedTopicContent: FC<{
  selectedTopic: ISelectedTopic;
  bookmarkDetails: IBookmarkedTopic;
}> = ({ selectedTopic, bookmarkDetails }) => {
  const { deselectTopic } = useSelectTopic();
  const {
    topic_image,
    topic_title,
    topic_short_description,
    topic_saved_date,
  } = selectedTopic;

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
    <div className="selected-topic">
      <div className="selected-topic-content">
        <div className="selected-topic-image">
          <img src={topic_image} alt="Topic" />
        </div>
        <div className="selected-topic-description">
          <div className="topic-title">{topic_title}</div>
          <div className="topic-saved-date">{topic_saved_date}</div>
          <div className="topic-description">
            {formatDescription(topic_short_description)}
          </div>
        </div>
      </div>
      <ActionBar
        backToTopicList={deselectTopic}
        handleShare={handleShare}
        topic={selectedTopic}
        bookmarkDetails={bookmarkDetails}
      />
    </div>
  );
};
export default SelectedTopicContent;
