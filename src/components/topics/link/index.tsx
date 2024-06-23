import { RootState } from "@store";
import { useSelector } from "react-redux";

const TopicLink = () => {
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const { topic_link } = selectedTopic;
  return (
    <div className="topic-link-content">
      <iframe
        width="100%"
        height="100%"
        src={`http://localhost:3000/news/load_topic_link?topicLink=${topic_link}`}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default TopicLink;
