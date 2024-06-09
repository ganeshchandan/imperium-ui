import { useSelector } from "react-redux";
import TopicTile from "./topic-tile";
import { RootState } from "../../../store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";

const TopicList = () => {
  const { topics, categories } = useSelector((state: RootState) => state.topic);

  const { selectedCategory } = useSelector((state: RootState) => state.filter);

  const renderTopicLsit = useCallback(() => {
    return topics.reduce((topicHtml, topic) => {
      const { topic_id, topic_category } = topic;
      return selectedCategory.includes(topic_category)
        ? [...topicHtml, <TopicTile topic={topic} key={topic_id} />]
        : topicHtml;
    }, [] as ReactNode[]);
  }, [topics, selectedCategory]);

  return (
    <div className="topic-list-view">
      <TopicListheader selectedCategory={selectedCategory} />
      <div className="topic-list">{renderTopicLsit()}</div>
      <AppFooter categories={categories} selectedCategory={selectedCategory} />
    </div>
  );
};

export default TopicList;
