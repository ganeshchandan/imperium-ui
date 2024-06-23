import TopicLink from ".";
import { useSelectTopic } from "../../../hooks/select-topic";
import SwipeComponent from "../../Swipe";

const SwipeableLinkTopic = SwipeComponent(TopicLink);

const SwipeableLinkPage = () => {
  const { deselectTopic } = useSelectTopic();
  return <SwipeableLinkTopic swipeRight={deselectTopic} />;
};

export default SwipeableLinkPage;
