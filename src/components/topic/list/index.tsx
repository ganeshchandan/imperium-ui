import { useSelector } from "react-redux";
import TopicTile from "./title";
import { RootState } from "../../../store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";
import EmptyList from "../empty-list";

const TopicList = () => {
  const { filteredTopics } = useSelector((state: RootState) => state.topic);

  const { relevanceList, selectedRelavance } = useSelector(
    (state: RootState) => state.filter
  );

  const renderTopicLsit = useCallback(() => {
    return filteredTopics.reduce((topicHtml, topic, index) => {
      const { topic_id } = topic;
      return [
        ...topicHtml,
        <TopicTile topic={topic} key={topic_id} topicIndex={index} />,
      ];
    }, [] as ReactNode[]);
  }, [filteredTopics]);

  return (
    <div className="topic-list-view">
      <TopicListheader
        selectedCategory={[
          selectedRelavance.length === 0 ? "All" : selectedRelavance[0],
        ]}
      />

      {filteredTopics.length > 0 ? (
        <div className="topic-list">{renderTopicLsit()}</div>
      ) : (
        <EmptyList />
      )}

      <AppFooter
        categories={relevanceList}
        selectedRelevance={selectedRelavance}
      />
    </div>
  );
};

export default TopicList;
