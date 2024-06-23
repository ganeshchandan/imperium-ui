import { RootState } from "@store";
import { useSelector } from "react-redux";
import ActionBar from "../selected-topic/action-bar";
import { useSelectTopic } from "../../../hooks/select-topic";
import { APP_URL } from "../../../actions/topic";

const TopicLink = () => {
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const { topic_link } = selectedTopic;
  const { deselectTopic } = useSelectTopic();

  return (
    <div className="topic-link-content">
      <div className="topic-link-iframe">
        <iframe
          width="100%"
          height="100%"
          src={`${APP_URL}/news/load_topic_link?topicLink=${topic_link}`}
          allowFullScreen={true}
        ></iframe>
      </div>
      <ActionBar
        backToTopicList={deselectTopic}
        topic={selectedTopic}
        enableBookmarkAndShare={false}
      />
    </div>
  );
};

export default TopicLink;
