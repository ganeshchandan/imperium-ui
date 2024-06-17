import { FC } from "react";
import { ISelectedTopic } from "../../../type";
import { formatDescription } from "../../../utils/app";
import ActionBar from "./action-bar";
import { useSelectTopic } from "../../../hooks";

const SelectedTopicContent: FC<{
  selectedTopic: ISelectedTopic;
  isBookmarked: boolean;
}> = ({ selectedTopic, isBookmarked }) => {
  const { deselectTopic } = useSelectTopic();
  const {
    topic_image,
    topic_title,
    topic_short_description,
    topic_saved_date,
  } = selectedTopic;

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
        topic={selectedTopic}
        isBookmarked={isBookmarked}
      />
    </div>
  );
};
export default SelectedTopicContent;
