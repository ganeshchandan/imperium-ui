import { FC } from "react";
import { formatDescription } from "@utils";
import { ITopicTileContent } from "@types";

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
