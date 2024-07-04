import { useSelector } from "react-redux";
import TopicTile from "./tile";
import { RootState } from "@store";
import { ReactNode, useCallback, useRef } from "react";
import AppFooter from "../../footer";
import TopicListheader from "./header";
import EmptyList from "../empty-list";
import { getBookmarkTopicId, getTopicListHeader } from "../../../utils/app";

const TopicList = () => {
  const listHeaderRef = useRef<HTMLDivElement>(null);
  const { filteredTopics, bookmarkedTopics } = useSelector(
    (state: RootState) => state.topic
  );
  const { relevanceList, selectedRelavance, filterType } = useSelector(
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnScroll = (event: any) => {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 5) {
      listHeaderRef.current?.classList.add("is-view-scrolled");
    } else {
      listHeaderRef.current?.classList.remove("is-view-scrolled");
    }
  };

  return (
    <div className="topic-list-view">
      <TopicListheader
        selectedCategory={getTopicListHeader(filterType, selectedRelavance)}
        viewType={viewType}
        ref={listHeaderRef}
      />
      {filteredTopics.length > 0 ? (
        <div className="topic-lists" onScroll={handleOnScroll}>
          {renderTopicLsit()}
        </div>
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
