import TopicLink from ".";
import { useSelectTopic } from "../../../hooks/select-topic";
import SwipeComponent from "../../Swipe";

const SwipeableLinkTopic = SwipeComponent(TopicLink);

const SwipeableLinkPage = () => {
  const { deselectTopic } = useSelectTopic();
  return (
    <div className="topic-link-content">
      <SwipeableLinkTopic swipeRight={deselectTopic} />
    </div>
  );
};

export default SwipeableLinkPage;
