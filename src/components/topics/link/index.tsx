import { RootState } from "@store";
import { useSelector } from "react-redux";
import ActionBar from "../selected-topic/action-bar";
import { useSelectTopic } from "../../../hooks/select-topic";
import { APP_URL } from "../../../actions/topic";
import { useRef } from "react";

const TopicLink = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const { topic_link } = selectedTopic;
  const { deselectTopic } = useSelectTopic();

  // useEffect(() => {
  //   readLinkData();
  // }, [topic_link]);

  // const readLinkData = async () => {
  //   if (topic_link) {
  //     const data = await fetch(
  //       `${APP_URL}/news/load_topic_link?topicLink=${topic_link}`
  //     );
  //     // debugger;
  //     const response = await data.text();
  //     if (contentRef.current) {
  //       contentRef.current.innerHTML = response || "";
  //     }
  //   }
  // };

  return (
    <>
      <div className="topic-link-iframe" ref={contentRef}>
        {topic_link && (
          <iframe
            width="100%"
            height="100%"
            src={`${APP_URL}/news/load_topic_link?topicLink=${topic_link}`}
            allowFullScreen={true}
          ></iframe>
        )}
      </div>
      <ActionBar
        backToTopicList={deselectTopic}
        topic={selectedTopic}
        enableBookmarkAndShare={false}
      />
    </>
  );
};

export default TopicLink;
