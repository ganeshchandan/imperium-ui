import { ISelectedTopic } from "@types";
import { FC } from "react";
import { formatDescription } from "../../../utils/app";

const Topic: FC<{
  selectedTopic: ISelectedTopic;
  className?: string;
}> = ({ selectedTopic, className = "" }) => {
  const {
    topic_image,
    topic_title,
    topic_short_description,
    topic_saved_date,
    topic_id,
  } = selectedTopic;
  return (
    <div className={`selected-topic-content ${className}`}>
      <div className="selected-topic-image">
        <img src={topic_image} alt="Topic" key={topic_id} />
      </div>
      <div className="selected-topic-description">
        <div className="topic-title">{topic_title}</div>
        <div className="topic-saved-date">{topic_saved_date}</div>
        <div className="topic-description">
          {formatDescription(topic_short_description)}
        </div>
      </div>
    </div>
  );
};

export default Topic;
