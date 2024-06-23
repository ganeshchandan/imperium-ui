import { RootState } from "@store";
import { useSelector } from "react-redux";
import TopicList from "./list";
import SelectedTopic from "./selected-topic";
import SwipeableLinkPage from "./link/swipeable-link-page";

const Topics = () => {
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const { selectedPage } = selectedTopic;

  return (
    <div className={`topics-container ${selectedPage}`}>
      <TopicList />
      <SelectedTopic />
      <SwipeableLinkPage />
    </div>
  );
};

export default Topics;
