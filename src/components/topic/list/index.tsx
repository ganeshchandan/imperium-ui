import { useSelector } from "react-redux";
import TopicTile from "./topic-tile";
import { RootState } from "../../../store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";

const TopicList = () => {
  const { topics } = useSelector((state: RootState) => state.topic);

  const { selectedCategory, relevanceList, selectedRelavance } = useSelector(
    (state: RootState) => state.filter
  );

  const renderTopicLsit = useCallback(() => {
    const selectedFilters =
      selectedRelavance.length > 0 ? selectedRelavance : selectedCategory;
    return topics.reduce((topicHtml, topic) => {
      const { topic_id, topic_category } = topic;
      return selectedFilters.includes(topic_category)
        ? [...topicHtml, <TopicTile topic={topic} key={topic_id} />]
        : topicHtml;
    }, [] as ReactNode[]);
  }, [topics, selectedCategory, selectedRelavance]);

  return (
    <div className="topic-list-view">
      <TopicListheader
        selectedCategory={[
          selectedRelavance.length === 0 ? "All" : selectedRelavance[0],
        ]}
      />
      <div className="topic-list">{renderTopicLsit()}</div>
      <AppFooter
        categories={relevanceList}
        selectedRelevance={selectedRelavance}
      />
    </div>
  );
};

export default TopicList;
