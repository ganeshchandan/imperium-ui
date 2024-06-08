import { useSelector } from "react-redux";
import TopicTile from "./topic-tile";
import { RootState } from "../../../store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";

const TopicList = () => {
  const { topics, selectedTopicCategory, categoryies } = useSelector(
    (state: RootState) => state.topic
  );

  const renderTopicLsit = useCallback(() => {
    return topics.reduce((topicHtml, topic) => {
      const { topic_id, topic_category } = topic;
      return topic_category.toLowerCase() ===
        selectedTopicCategory.toLowerCase()
        ? [...topicHtml, <TopicTile topic={topic} key={topic_id} />]
        : topicHtml;
    }, [] as ReactNode[]);
  }, [topics, selectedTopicCategory]);

  return (
    <div className="topic-list-view">
      <TopicListheader selectedTopicCategory={selectedTopicCategory} />
      <div className="topic-list">{renderTopicLsit()}</div>
      <AppFooter
        categoryies={categoryies}
        selectedTopicCategory={selectedTopicCategory}
      />
    </div>
  );
};

export default TopicList;
