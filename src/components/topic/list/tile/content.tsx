import { FC } from "react";
import { formatDescription } from "../../../../utils/app";
import { ITopicTileContent } from "../../../../type";

const TopicTileContent: FC<ITopicTileContent> = ({
  topic_title,
  topic_short_description,
}) => {
  return (
    <div className="topic-title-content">
      <div className="topic-title">{topic_title}</div>
      <div className="topic-content">
        {formatDescription(topic_short_description)}
      </div>
    </div>
  );
};

export default TopicTileContent;
