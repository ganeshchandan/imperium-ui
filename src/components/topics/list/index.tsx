import { useSelector } from "react-redux";
import TopicTile from "./tile";
import { RootState } from "@store";
import { ReactNode, useCallback } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";
import EmptyList from "../empty-list";
import { getBookmarkTopicId } from "../../../utils/app";

const TopicList = () => {
  const { filteredTopics, bookmarkedTopics } = useSelector(
    (state: RootState) => state.topic
  );
  const { relevanceList, selectedRelavance } = useSelector(
    (state: RootState) => state.filter
  );
  const { viewType } = useSelector((state: RootState) => state.appConfig);

  const renderTopicLsit = useCallback(() => {
    return filteredTopics.reduce((topicHtml, topic, index) => {
      const { topic_id, topic_title } = topic;
      const bookmarkDetails = getBookmarkTopicId(bookmarkedTopics, topic_title);
      return [
        ...topicHtml,
        <TopicTile
          topic={topic}
          key={topic_id}
          topicIndex={index}
          bookmarkDetails={bookmarkDetails}
          viewType={viewType}
        />,
      ];
    }, [] as ReactNode[]);
  }, [bookmarkedTopics, filteredTopics, viewType]);

  return (
    <div className="topic-list-view">
      <TopicListheader
        selectedCategory={[
          selectedRelavance.length === 0 ? "All" : selectedRelavance[0],
        ]}
        viewType={viewType}
      />

      {filteredTopics.length > 0 ? (
        <div className="topic-lists">{renderTopicLsit()}</div>
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
