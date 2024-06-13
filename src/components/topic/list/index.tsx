import { useSelector } from "react-redux";
import TopicTile from "./topic-tile";
import { RootState } from "../../../store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";

const TopicList = () => {
  const { filteredTopics } = useSelector((state: RootState) => state.topic);

  const { selectedCategory, relevanceList, selectedRelavance } = useSelector(
    (state: RootState) => state.filter
  );

  const renderTopicLsit = useCallback(() => {
    const selectedFilters =
      selectedRelavance.length > 0 ? selectedRelavance : selectedCategory;
    return filteredTopics.reduce((topicHtml, topic, index) => {
      const { topic_id, topic_category } = topic;
      return selectedFilters.length === 0 ||
        selectedFilters.includes(topic_category)
        ? [
            ...topicHtml,
            <TopicTile topic={topic} key={topic_id} topicIndex={index} />,
          ]
        : topicHtml;
    }, [] as ReactNode[]);
  }, [filteredTopics, selectedCategory, selectedRelavance]);

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
